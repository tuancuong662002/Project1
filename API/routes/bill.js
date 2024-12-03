const express = require('express');
const router = express.Router();
const Bill = require('../app/models/Bill');

router.delete('/:id', (req, res, next) => {
    Bill.findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: 'Product deleted successfully.' }))
        .catch(err => next(err))
})
router.put('/:id', (req, res, next) => {
    const { status } = req.body; 
    Bill.findByIdAndUpdate(
        req.params.id,
        { status }, 
        { new: true } 
    )
        .then(bill => {
            if (!bill) {
                return res.status(404).json({ message: 'Customer not found' });
            }
            res.json(bill); 
        })
        .catch(err => next(err)); 
}); 
router.get('/totalPriceByDate', async (req, res) => {
    try {
        const result = await Bill.aggregate([
            {
                $project: {
                    day: { $dateToString: { format: "%Y-%m-%d", date: "$updatedAt" } },
                    total_price: 1, // Lấy trường total_price
                },
            },
            {
                $group: {
                    _id: "$day", // Nhóm theo ngày
                    total: { $sum: "$total_price" }, // Tính tổng total_price
                },
            },
            {
                $sort: { _id: 1 }, // Sắp xếp theo ngày tăng dần
            },
        ]);

        res.json(result);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server Error');
    }
});
router.get('/completed', async (req, res) => {
    try {
        const completedBills = await Bill.find({ status: 'completed' });
        res.status(200).json(completedBills);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Lỗi server khi tìm các hóa đơn completed' });
    }
});
router.get("/", async (req, res) => {
    try {
        const bills = await Bill.find()
            .populate("customer_id", "name email address") // Lấy thông tin khách hàng
            .populate("items.product_id", "name price");  // Lấy thông tin sản phẩm
        res.json(bills);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch bills", error });
    }
});

module.exports = router;  