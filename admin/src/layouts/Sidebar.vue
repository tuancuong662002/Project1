<template>
     <!-- Sidebar wrapper start -->
                <nav id="sidebar" class="sidebar-wrapper">

                    <!-- App brand starts -->
                    <div class="app-brand px-3 py-3 d-flex align-items-center">
                        <a href="index.html">
                            <img src="../assets/images/logo.svg" class="logo" alt="Bootstrap Gallery" />
                        </a>
                    </div>
                    <!-- App brand ends -->
                    <!-- Sidebar profile starts -->
                    <div class="sidebar-user-profile">
                        <img src="../assets/images/user.png" class="profile-thumb rounded-2 p-2 d-lg-flex d-none"
                            alt="Bootstrap Gallery" />
                        <h5 class="profile-name lh-lg mt-2 text-truncate">Harriet Bradford</h5>
                        <ul class="profile-actions d-flex m-0 p-0">
                            <li>
                                <a href="javascript:void(0)">
                                    <i class="bi bi-skype fs-4"></i>
                                    <span class="count-label"></span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <i class="bi bi-dribbble fs-4"></i>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <i class="bi bi-twitter fs-4"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- Sidebar profile ends -->

                    <!-- Sidebar menu starts -->
                    <div class="sidebarMenuScroll">
                        <ul class="sidebar-menu">
                            <li class="active current-page">
                                 <router-link to="/">
                                    <i class="bi bi-bar-chart-line"></i>
                                    <span class="menu-text">Home</span>
                                 </router-link>
                            </li>
                            <li>
                                <router-link to="/Product">
                                     <i class="bi bi-clipboard-data"></i>
                                    <span class="menu-text">Products</span>
                                </router-link>
                            </li>
                             <li>
                                <router-link to="/Bill">
                                     <i class="bi bi-columns-gap"></i>
                                    <span class="menu-text">Bill</span>
                                </router-link>
                            </li>
                             <li>
                                <router-link to="/Customer">
                                     <i class="bi bi-person-square"></i>
                                    <span class="menu-text">Customer</span>
                                </router-link>
                            </li>
                        

                        
                        </ul>
                    </div>
                    <!-- Sidebar menu ends -->
                </nav>
</template>
<script setup> 

import { useRouter } from 'vue-router';
import Sidebar  from '@/layouts/Sidebar.vue';
const router = useRouter

const goToProduct = () => {
router.push("/Product");
};
const goToBill = () => {
router.push("/bill");
};
const goToCustomer = () => {
router.push("/Customer");
};

</script>
