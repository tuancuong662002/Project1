
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
                      
                    
                    <!-- App Hero header ends -->

                    <!-- App body starts -->
					
               <div class="container">
		     <div class="table-responsive">
			<div class="table-wrapper">
				<div class="table-title">
					<div class="row">
						<div class="col-xs-6">
							<h2>Manage <b>Customers</b></h2>
						</div>
						<div class="col-xs-6">
							<a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Customers</span></a>						
						</div>
					</div>
				</div>
				<table class="table table-striped table-hover">
					<thead>
						<tr>
							<th>
								<span class="custom-checkbox">
									<input type="checkbox" id="selectAll">
									<label for="selectAll"></label>
								</span>
							</th>
							<th>Name</th>
							<th>Image</th>
                            <th>Adress</th>
							<th>Email</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(customer  , index ) in Customers" :key="customer._id">
							<td>
								<span class="custom-checkbox">
									<input type="checkbox" id="checkbox1" name="options[]" value="1">
									<label for="checkbox1"></label>
								</span>
							</td>
							<td>{{customer.name}}</td>
							<td>
                             <img :src="`http://localhost:3000/uploads/${customer.image}`" alt="" width="30px" height="30px" />
							</td>
							<td>{{ customer.address }}</td>
                            <td>{{ customer.email }}</td>
							<td>
								<a href="#editEmployeeModal" class="edit" data-toggle="modal" @click="openEditModal(customer)"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
								<a href="#deleteEmployeeModal" class="delete" data-toggle="modal" @click="openDeleteModal(customer._id)"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
							</td>
						</tr>
						
					</tbody>
				</table>
				<div class="clearfix">
					<div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
					<ul class="pagination">
						<li class="page-item disabled"><a href="#">Previous</a></li>
						<li class="page-item"><a href="#" class="page-link">1</a></li>
						<li class="page-item"><a href="#" class="page-link">2</a></li>
						<li class="page-item active"><a href="#" class="page-link">3</a></li>
						<li class="page-item"><a href="#" class="page-link">4</a></li>
						<li class="page-item"><a href="#" class="page-link">5</a></li>
						<li class="page-item"><a href="#" class="page-link">Next</a></li>
					</ul>
				</div>
			</div>
		</div>        
    </div>
	<!-- ADD Modal HTML -->
	<div id="addEmployeeModal" class="modal fade">
		<div class="modal-dialog">
			<div class="modal-content">
				<form @submit = "submitAdd" enctype="multipart/form-data">
					<div class="modal-header">						
						<h4 class="modal-title">Add Employee</h4>
						<button type="button"  class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">					
						<div class="form-group">
							<label>Name</label>
							<input v-model="input_name" type="text" class="form-control" required>
						</div>
						<div class="form-group">
							<label>Image</label>
							<input  type="file" class="form-control" @change="onSelectFile" ref="file_input">
						</div>
						<div class="form-group">
							<label>address</label>
							<input v-model="input_address" type="text" class="form-control" required>
						</div>	
                        <div class="form-group">
							<label>email</label>
							<input v-model="input_email" type="email" class="form-control" required>
						</div>				
					</div>
					<div class="modal-footer">
						<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
						<input  type="submit" class="btn btn-success"  value="Add">
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- Edit Modal HTML -->
	<div id="editEmployeeModal" class="modal">
		<div class="modal-dialog">
			<div class="modal-content">
				<form  enctype="multipart/form-data">
					<div class="modal-header">						
						<h4 class="modal-title">Edit customer</h4>
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">					
						<div class="form-group">
							<label>Name</label>
							<div v-if="editcustomer">
							   <input type="text" class="form-control" v-model="editcustomer.name" required>
						    </div>
						</div>
						<div class="form-group">
							<label>Image</label>
							<input  type="file" class="form-control" @change="onSelect" ref="file">
							<div v-if="editcustomer">
							  <img :src="`http://localhost:3000/uploads/${editcustomer.image}`" alt="" width="50px" height="50px" />
                            </div>
						</div>
                        <div class="form-group">
							<label>Adress</label>
							<div v-if="editcustomer">
							  <input type="text" class="form-control" v-model="editcustomer.address" required>
						    </div>
						</div>
						<div class="form-group">
							<label>Email</label>
							<div v-if="editcustomer">
								<input type="text" class="form-control" v-model="editcustomer.email" required>
							</div>
						</div>					
					</div>
					<div class="modal-footer">
						<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
						<input @click = "onSubmit"  data-dismiss="modal" type="button" class="btn btn-info" value="Save">
					</div>
				</form>
			</div>
		</div>
	</div>

<!-- Delete Modal HTML -->
<div id="deleteEmployeeModal" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div >
        <div class="modal-header">						
          <h4 class="modal-title">Delete Employee</h4>
          <button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div class="modal-body">					
          <p>Are you sure you want to delete these Records?</p>
          <p class="text-warning"><small>This action cannot be undone.</small></p>
        </div>
        <div class="modal-footer">
          <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
          <input @click="deleteSubmit" type="button" class="btn btn-danger"  data-dismiss="modal" value="Delete">
        </div>
	</div>
    </div>
  </div>
</div>

                    <!-- App body ends -->

                    <!-- App footer start -->
                    <div class="app-footer">
                        <span>© Bootstrap Gallery 2024</span>
                    </div>
                    <!-- App footer end -->

                </div>
                <!-- App container ends -->

            </div>
            <!-- Main container end -->

        </div>
        <!-- Page wrapper end -->

        <!-- *************
			************ JavaScript Files *************
		************* -->
    </div>
</template>
<script setup>
   import Sidebar  from '@/layouts/Sidebar.vue';
   import { ref, onMounted, reactive } from 'vue';
   import axios from 'axios';
   //show customer
   let Customers = ref([]);
   let file = ref(null) ;
   let onSelect = (event) =>{
	  file.value = event.target.files[0]
   }
   let input_file = ref(null)
   let onSelectFile = (event)=>{
	  input_file.value = event.target.files[0]
   }
   let fetchCustomers = async () => {
      try {
         const response = await axios.get('http://localhost:3000/customer/');
         Customers.value = [...response.data];
      }catch (error){
         console.error(error);
      }
   };

   //edit customer
   let editcustomer = ref(null); 
   let openEditModal = (customer) => {
      editcustomer.value = { ...customer };
   };
   let onSubmit = async () =>{
	    let customerEdited = new FormData()
		console.log(file.value)
		customerEdited.append('file' , file.value ) 
		customerEdited.append('name' , editcustomer.value.name )
		customerEdited.append('price' , editcustomer.value.price )
		customerEdited.append('quantity' , editcustomer.value.quantity )
	   try{
       await axios.put(`http://localhost:3000/customer/${editcustomer.value._id}`, customerEdited,  {
        headers:{
        'Content-Type': 'multipart/form-data',
        },
    })
	    editcustomer.value = null;
        file.value = null ; 
        fetchCustomers();
      } catch (error){
        console.log(error);
      }
   }
   //delete customer
   let id_customer = ref(null) ;
   let openDeleteModal = (id) => {
      id_customer.value = id ;
   };
   let deleteSubmit = async () =>{
      try{
         await axios.delete(`http://localhost:3000/customer/${id_customer.value}`);
         fetchCustomers();
	 // Đóng modal thủ công
    // const modalElement = document.getElementById('deleteEmployeeModal');
    // const modalInstance = bootstrap.Modal.getInstance(modalElement);
    // if (modalInstance) {
    //   modalInstance.hide();
    // }
      } catch (error){
        console.log(error);
      }
   }
   //add customer
   let input_name = ref(null)
   let input_address = ref(null)
   let input_email = ref(null)
   let submitAdd = async () =>{
	if (!input_file.value) {
        alert("Please select an image file.");
        return;
    }
      let customerAdd = new FormData()
	    console.log(input_file.value)
		customerAdd.append('file' , input_file.value ) 
		customerAdd.append('name' , input_name.value)
		customerAdd.append('address' , input_address.value )
		customerAdd.append('email' , input_email.value )
		try{
		let response =  await axios.post('http://localhost:3000/customer/store', customerAdd,  {
        headers:{
        'Content-Type': 'multipart/form-data',
        },
    })
        Customers.value = [...Customers.value, response.data]
        input_name.value = null;
        input_address.value = null;
        input_email.value = null;
		input_file.value = null ; 
      } catch (error){
        console.log(error);
      }
   }
		
   onMounted(fetchCustomers);
</script>




<style>
body {
	color: #566787;
	background: #f5f5f5;
	font-family: 'Varela Round', sans-serif;
	font-size: 13px;
}
.table-responsive {
    margin: 30px 0;
}
.table-wrapper {
	background: #fff;
	padding: 20px 25px;
	border-radius: 3px;
	min-width: 1000px;
	box-shadow: 0 1px 1px rgba(0,0,0,.05);
}
.table-title {        
	padding-bottom: 15px;
	background: #435d7d;
	color: #fff;
	padding: 16px 30px;
	min-width: 100%;
	margin: -20px -25px 10px;
	border-radius: 3px 3px 0 0;
}
.table-title h2 {
	margin: 5px 0 0;
	font-size: 24px;
}
.table-title .btn-group {
	float: right;
}
.table-title .btn {
	color: #fff;
	float: right;
	font-size: 13px;
	border: none;
	min-width: 50px;
	border-radius: 2px;
	border: none;
	outline: none !important;
	margin-left: 10px;
}
.table-title .btn i {
	float: left;
	font-size: 21px;
	margin-right: 5px;
}
.table-title .btn span {
	float: left;
	margin-top: 2px;
}
table.table tr th, table.table tr td {
	border-color: #e9e9e9;
	padding: 12px 15px;
	vertical-align: middle;
}
table.table tr th:first-child {
	width: 60px;
}
table.table tr th:last-child {
	width: 100px;
}
table.table-striped tbody tr:nth-of-type(odd) {
	background-color: #fcfcfc;
}
table.table-striped.table-hover tbody tr:hover {
	background: #f5f5f5;
}
table.table th i {
	font-size: 13px;
	margin: 0 5px;
	cursor: pointer;
}	
table.table td:last-child i {
	opacity: 0.9;
	font-size: 22px;
	margin: 0 5px;
}
table.table td a {
	font-weight: bold;
	color: #566787;
	display: inline-block;
	text-decoration: none;
	outline: none !important;
}
table.table td a:hover {
	color: #2196F3;
}
table.table td a.edit {
	color: #FFC107;
}
table.table td a.delete {
	color: #F44336;
}
table.table td i {
	font-size: 19px;
}
table.table .avatar {
	border-radius: 50%;
	vertical-align: middle;
	margin-right: 10px;
}
.pagination {
	float: right;
	margin: 0 0 5px;
}
.pagination li a {
	border: none;
	font-size: 13px;
	min-width: 30px;
	min-height: 30px;
	color: #999;
	margin: 0 2px;
	line-height: 30px;
	border-radius: 2px !important;
	text-align: center;
	padding: 0 6px;
}
.pagination li a:hover {
	color: #666;
}	
.pagination li.active a, .pagination li.active a.page-link {
	background: #03A9F4;
}
.pagination li.active a:hover {        
	background: #0397d6;
}
.pagination li.disabled i {
	color: #ccc;
}
.pagination li i {
	font-size: 16px;
	padding-top: 6px
}
.hint-text {
	float: left;
	margin-top: 10px;
	font-size: 13px;
}    
/* Custom checkbox */
.custom-checkbox {
	position: relative;
}
.custom-checkbox input[type="checkbox"] {    
	opacity: 0;
	position: absolute;
	margin: 5px 0 0 3px;
	z-index: 9;
}
.custom-checkbox label:before{
	width: 18px;
	height: 18px;
}
.custom-checkbox label:before {
	content: '';
	margin-right: 10px;
	display: inline-block;
	vertical-align: text-top;
	background: white;
	border: 1px solid #bbb;
	border-radius: 2px;
	box-sizing: border-box;
	z-index: 2;
}
.custom-checkbox input[type="checkbox"]:checked + label:after {
	content: '';
	position: absolute;
	left: 6px;
	top: 3px;
	width: 6px;
	height: 11px;
	border: solid #000;
	border-width: 0 3px 3px 0;
	transform: inherit;
	z-index: 3;
	transform: rotateZ(45deg);
}
.custom-checkbox input[type="checkbox"]:checked + label:before {
	border-color: #03A9F4;
	background: #03A9F4;
}
.custom-checkbox input[type="checkbox"]:checked + label:after {
	border-color: #fff;
}
.custom-checkbox input[type="checkbox"]:disabled + label:before {
	color: #b8b8b8;
	cursor: auto;
	box-shadow: none;
	background: #ddd;
}
/* Modal styles */
.modal .modal-dialog {
	max-width: 400px;
}
.modal .modal-header, .modal .modal-body, .modal .modal-footer {
	padding: 20px 30px;
}
.modal .modal-content {
	border-radius: 3px;
	font-size: 14px;
}
.modal .modal-footer {
	background: #ecf0f1;
	border-radius: 0 0 3px 3px;
}
.modal .modal-title {
	display: inline-block;
}
.modal .form-control {
	border-radius: 2px;
	box-shadow: none;
	border-color: #dddddd;
}
.modal textarea.form-control {
	resize: vertical;
}
.modal .btn {
	border-radius: 2px;
	min-width: 100px;
}	
.modal form label {
	font-weight: normal;
}	
</style>