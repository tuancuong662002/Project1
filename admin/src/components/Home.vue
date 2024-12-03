<script setup>
   import Sidebar from '@/layouts/Sidebar.vue';
   import { ref, onMounted } from 'vue';
   import axios from 'axios';
   import VueApexCharts from "vue3-apexcharts";
   defineExpose({
   components: {
    apexchart: VueApexCharts,
  },
});
   // Khởi tạo giá trị ban đầu cho các biến
   let Bills = ref([]);
   let Saled = ref(0);
   let Income = ref(0);

   // Sử dụng onMounted để thực hiện thao tác API
   let getBillCompleted = async () => {
      try {
         const response = await axios.get('http://localhost:3000/bill/completed/');
         Bills.value = [...response.data];

         // Tính toán Saled và Income
            Bills.value.forEach(bill => {
            bill.items.forEach(item => {
               Saled.value += item.quantity;
               Income.value += item.quantity * item.price;
            });
         });

        
         
      } catch (error) {
         console.error('Error fetching data:', error);
      }
   }
   let totalPriceByDate_vl = ref(null)
   let totalPriceByDate  = async () => {
      try {
         const response = await axios.get('http://localhost:3000/bill/totalPriceByDate/');
         totalPriceByDate_vl.value = [...response.data];
      } catch (error) {
         console.error('Error fetching data:', error);
      }
   }
    const updateChartData = () => {
      const idArray = totalPriceByDate_vl.value.map(item => item._id);
      const totalArray = totalPriceByDate_vl.value.map(item => item.total);
      console.log(idArray, totalArray)
      series.value = [{
         name: "Total Price",
         data: totalArray,
      }];
      chartOptions.value.labels = idArray
   }
    
   // Định dạng số tiền đẹp hơn
   const formatCurrency = (amount) => {
      return new Intl.NumberFormat('vi-VN', {
         style: 'currency',
         currency: 'VND',
      }).format(amount);
   };

   // Dữ liệu cho biểu đồ
  // Đăng ký component VueApexCharts
const series = ref([
  {
    name: "STOCK ABC",
    data: [],
  },
]);

const chartOptions = ref({
  chart: {
    type: "area",
    height: 350,
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  title: {
    text: "Fundamental Analysis of Stocks",
    align: "left",
  },
  subtitle: {
    text: "Price Movements",
    align: "left",
  },
  labels: ['3-12-2024' , '4-12-2024','5-12-2024'],   
  xaxis: {
    type: "string",  
  },
  yaxis: {
    opposite: true,
  },
  legend: {
    horizontalAlign: "left",
  },
});

onMounted(async () => {
      await Promise.all([getBillCompleted(), totalPriceByDate()]);
      updateChartData();
 });

</script>






<template>
    <div class="container">
        <!-- Page wrapper start -->
        <div class="page-wrapper">

            <!-- Main container start -->
            <div class="main-container">

                <!-- Sidebar wrapper start -->
                 
                <Sidebar/>


                <!-- Sidebar wrapper end -->

                <!-- App container starts -->
                <div class="app-container">

                    <!-- App header starts -->
                    <div class="app-header d-flex align-items-center">

                        <!-- Toggle buttons start -->
                        <div class="d-flex">
                            <button class="btn btn-primary me-2 toggle-sidebar" id="toggle-sidebar">
                                <i class="bi bi-chevron-left fs-5"></i>
                            </button>
                            <button class="btn btn-primary me-2 pin-sidebar" id="pin-sidebar">
                                <i class="bi bi-chevron-left fs-5"></i>
                            </button>
                        </div>
                        <!-- Toggle buttons end -->

                        <!-- App brand sm start -->
                        <div class="app-brand-sm d-md-none d-sm-block">
                            <a href="index.html">
                                <img src="../assets/images/logo-sm.svg" class="logo" alt="Bootstrap Gallery">
                            </a>
                        </div>
                        <!-- App brand sm end -->

                        <!-- App header actions start -->
                        <div class="header-actions">
                            <div class="d-lg-block d-none me-2">

                                <!-- Search container start -->
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search" />
                                    <button class="btn btn-outline-primary" type="button">
                                        <i class="bi bi-search fs-5"></i>
                                    </button>
                                </div>
                                <!-- Search container end -->

                            </div>
                            <div class="dropdown ms-3">
                                <a class="dropdown-toggle d-flex p-2 py-3" href="#!" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-grid fs-2 lh-1"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end shadow">
                                    <!-- Row start -->
                                    <div class="d-flex gap-2 m-2">
                                        <a href="javascript:void(0)" class="g-col-4 p-2 border rounded-2">
                                            <img src="../assets/images/brand-behance.svg" class="img-3x"
                                                alt="Admin Themes" />
                                        </a>
                                        <a href="javascript:void(0)" class="g-col-4 p-2 border rounded-2">
                                            <img src="../assets/images/brand-gatsby.svg" class="img-3x"
                                                alt="Admin Themes" />
                                        </a>
                                        <a href="javascript:void(0)" class="g-col-4 p-2 border rounded-2">
                                            <img src="../assets/images/brand-google.svg" class="img-3x"
                                                alt="Admin Themes" />
                                        </a>
                                        <a href="javascript:void(0)" class="g-col-4 p-2 border rounded-2">
                                            <img src="../assets/images/brand-bitcoin.svg" class="img-3x"
                                                alt="Admin Themes" />
                                        </a>
                                        <a href="javascript:void(0)" class="g-col-4 p-2 border rounded-2">
                                            <img src="../assets/images/brand-dribbble.svg" class="img-3x"
                                                alt="Admin Themes" />
                                        </a>
                                    </div>
                                    <!-- Row end -->
                                </div>
                            </div>
                            <div class="dropdown ms-3">
                                <a class="dropdown-toggle d-flex p-2 py-3" href="#!" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-bell fs-2 lh-1"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end shadow">
                                    <div class="dropdown-item">
                                        <div class="d-flex py-2 border-bottom">
                                            <img src="../assets/images/user.png" class="img-4x me-3 rounded-3"
                                                alt="Admin Theme" />
                                            <div class="m-0">
                                                <h5 class="mb-1 fw-semibold">Sophie Michiels</h5>
                                                <p class="mb-1">Membership has been ended.</p>
                                                <p class="small m-0 text-primary">Today, 07:30pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dropdown-item">
                                        <div class="d-flex py-2 border-bottom">
                                            <img src="../assets/images/user2.png" class="img-4x me-3 rounded-3"
                                                alt="Admin Theme" />
                                            <div class="m-0">
                                                <h5 class="mb-1 fw-semibold">Sophie Michiels</h5>
                                                <p class="mb-1">Congratulate, James for new job.</p>
                                                <p class="small m-0 text-primary">Today, 08:00pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dropdown-item">
                                        <div class="d-flex py-2">
                                            <img src="../assets/images/user1.png" class="img-4x me-3 rounded-3"
                                                alt="Admin Theme" />
                                            <div class="m-0">
                                                <h5 class="mb-1 fw-semibold">Sophie Michiels</h5>
                                                <p class="mb-2">Lewis added new schedule release.</p>
                                                <p class="small m-0 text-primary">Today, 09:30pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border-top py-2 px-3 text-end">
                                        <a href="javascript:void(0)">View all</a>
                                    </div>
                                </div>
                            </div>
                            <div class="dropdown ms-3">
                                <a id="userSettings"
                                    class="dropdown-toggle d-flex py-2 align-items-center text-decoration-none"
                                    href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="d-none d-md-block me-2">Harriet Bradford</span>
                                    <img src="../assets/images/user.png" class="rounded-circle img-3x"
                                        alt="Bootstrap Gallery" />
                                </a>
                                <div class="dropdown-menu dropdown-menu-end shadow">
                                    <a class="dropdown-item d-flex align-items-center" href="profile.html"><i
                                            class="bi bi-person fs-4 me-2"></i>Profile</a>
                                    <a class="dropdown-item d-flex align-items-center" href="settings.html"><i
                                            class="bi bi-gear fs-4 me-2"></i>Account Settings</a>
                                    <a class="dropdown-item d-flex align-items-center" href="login.html"><i
                                            class="bi bi-escape fs-4 me-2"></i>Logout</a>
                                </div>
                            </div>
                        </div>
                        <!-- App header actions end -->

                    </div>
                    <!-- App header ends -->

                    <!-- App hero header starts -->
                    <div class="app-hero-header">
                        <h5 class="fw-light">Welcome Bradford,</h5>
                        <h3 class="fw-light mb-5">
                            <span>Home</span> / <span class="menu-text">Analytics</span>
                        </h3>
                    </div>
                    <!-- App Hero header ends -->

                    <!-- App body starts -->
                    <div class="app-body">

                        <!-- Row start -->
                        <div class="row">
                            <div class="col-lg-4 col-sm-6 col-12">
                                <div class="card shadow mb-4 p-3 rounded-2 justify-content-between flex-row">
                                    <div class="mt-3">
                                        <h5 class="text-secondary fw-light">Sales</h5>
                                        <h1 class="text-primary">{{Saled}}</h1>
                                        <span class="badge border border-primary text-primary me-3">Today</span>
                                    </div>
                                    <div id="sparkline1"></div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 col-12">
                                <div class="card shadow mb-4 p-3 rounded-2 justify-content-between flex-row">
                                    <div class="mt-3">
                                        <h5 class="text-secondary fw-light">Expenses</h5>
                                        <h1 class="text-primary">2500</h1>
                                        <span class="badge border border-primary text-primary me-3">Last week</span>
                                    </div>
                                    <div id="sparkline2"></div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-12 col-12">
                                <div class="card shadow mb-4 p-3 rounded-2 justify-content-between flex-row">
                                    <div class="mt-3">
                                        <h5 class="text-secondary fw-light">Income</h5>
                                        <h1 class="text-primary">{{ formatCurrency(Income)}}</h1>
                                        <span class="badge border border-primary text-primary me-3">Year 2022</span>
                                    </div>
                                    <div id="sparkline3"></div>
                                </div>
                            </div>
                        </div>
                        <!-- Row end -->

                      
                        <!-- Row starts -->
                       <div class=" col-12">
                        <div class="card shadow mb-4">
                            <div class="card-header">
                                <h5 class="card-title">Doanh thu theo ngày</h5>
                            </div>
                            <div class="card-body">
                                <div id="app">
    <apexchart
      type="area"
      height="350"
      :options="chartOptions"
      :series="series"
    />
  </div>
                                <div class="text-center my-4">
                                </div>
                            </div>
                        </div>
                    </div>
                        <!-- Row ends -->

                    </div>
                    <!-- App body ends -->

                    
                    <div class="app-footer">
                       
                    </div>
                 

                </div>
              

            </div>
          

        </div>
      
    </div>
</template>


<style>
#app {
  width: 100%;
  height: 100%;
}
</style>