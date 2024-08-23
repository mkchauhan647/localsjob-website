"use client"
import React, { useState, useEffect } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import dynamic from 'next/dynamic';
import {
    PlusSquareOutlined,
    AppstoreOutlined,
    SearchOutlined,
    FileSearchOutlined,
    BankOutlined,
    ToolOutlined,
    LineChartOutlined,
    ProfileOutlined,
    DollarOutlined,
    SolutionOutlined,
    CalendarOutlined,
    UsergroupAddOutlined,
    IdcardOutlined,
    BulbOutlined,
    AppstoreAddOutlined,
    ApiOutlined,
    ClusterOutlined,
    SettingFilled,
    SettingOutlined,
} from '@ant-design/icons';
import { FaFileInvoice, FaFileInvoiceDollar } from 'react-icons/fa';
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import { HiOutlineUserGroup } from 'react-icons/hi';
const PostJobForm = dynamic(() => import('../components/Postjob'));
const ManageJobListings = dynamic(() => import('../components/ManageJobListing'));
const SearchCandidates = dynamic(() => import('../components/SearchCandidates'));
const ResumeDatabase = dynamic(() => import('../components/ResumeDatabase'));
const RecruitmentEvent = dynamic(() => import('../components/RecruitmentEvent'));
const RecruitmentPackages = dynamic(() => import('../components/RecruitmentPackages'));
const AnalyticsAndReports = dynamic(() => import('../components/Analytics'));
const CompanyDashboard = dynamic(() => import('../components/CompanyDashboard'));
const BillingAndPayments = dynamic(() => import('../components/BillingAndPayment'));
const EmployeeOnboarding = dynamic(() => import('../components/EmployeeOnboarding'));
const SupportAndTraining = dynamic(() => import('../components/SupportAndTraining'));
const PartnershipOpportunities = dynamic(() => import('../components/Partnership'));
const CustomizedSolutions = dynamic(() => import('../components/CustomizedSolution'));
const EnterpriseSolutions = dynamic(() => import('../components/EnterpriseSolution'));
const CompaniesListed = dynamic(() => import('../components/CompaniesListed'));



const { Sider, Content } = Layout;
const { SubMenu } = Menu;


const page: React.FC = () => {

    const [selectedMenuItem, setSelectedMenuItem] = useState<string>('1');
    const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

    const handleMenuSelect = (selected: any) => {
        setSelectedMenuItem(selected.key);
        setDrawerVisible(false); // Close the drawer when a menu item is selected
    };


    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const onClose = () => {
        setDrawerVisible(false);
    };



    useEffect(() => {
        // Scroll to the top of the page on initial render
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);

            // Set initial screen size
            setIsSmallScreen(window.innerWidth <= 768);

            // Add event listener for window resize
            const handleResize = () => {
                setIsSmallScreen(window.innerWidth <= 768);
            };


            window.addEventListener('resize', handleResize);

            return () => {
                // Remove event listener when component is unmounted
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return (

        <Layout style={{ minHeight: '100vh' }}>
            {isSmallScreen && (
                <Button type="primary" onClick={showDrawer} className="menu-button">
                    Menu
                </Button>
            )}
            {!isSmallScreen && (
                <Sider width={250} theme="dark">
                    <Menu onSelect={handleMenuSelect} mode="vertical" defaultSelectedKeys={['1']} style={{ height: '100%' }}>
                    <Menu.Item key="1" icon={<ProfileOutlined />}>
                         Dashboard
                    </Menu.Item>
                    <Menu.Item key="2" icon={<AppstoreOutlined />}>
                        Manage Job Listings
                        </Menu.Item>
                        <Menu.Item key="15" icon={<ClusterOutlined />}>
                       Companies
                        </Menu.Item>
                        <Menu.Item key="5" icon={<SettingOutlined  />}>
                        Packages
                    </Menu.Item>
                    <Menu.Item key="3" icon={<HiOutlineUserGroup />}>
                        Applicants
                    </Menu.Item>
                    <Menu.Item key="4" icon={<LiaFileInvoiceSolid />}>
                        Invoices
                        </Menu.Item>
                        
                        <Menu.Item key="16" icon={<SettingOutlined  />}>
                        Settings
                    </Menu.Item>
                    
                    {/* <SubMenu key="sub1" icon={<BankOutlined />} title="Employer Branding">
                        <Menu.Item key="5">Recruitment Packages</Menu.Item>
                        <Menu.Item key="6">Analytics and Reports</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="7" icon={<PlusSquareOutlined />}>
                        Post a job
                    </Menu.Item>
                    <Menu.Item key="8" icon={<DollarOutlined />}>
                        Billing and Payments
                    </Menu.Item>
                    <SubMenu key="sub2" icon={<SolutionOutlined />} title="Applicant Tracking System (ATS)">
                        <Menu.Item key="9">Recruitment Events</Menu.Item>
                        <Menu.Item key="10">Employee Onboarding Solutions</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<ToolOutlined />} title="HR Resources">
                        <Menu.Item key="11">Support and Training</Menu.Item>
                        <Menu.Item key="12">Partnership Opportunities</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="13" icon={<AppstoreAddOutlined />}>
                        Customized Solutions
                    </Menu.Item>
                    <Menu.Item key="14" icon={<ClusterOutlined />}>
                        Enterprise Solutions
                    </Menu.Item>
                     */}
                </Menu>
                </Sider>
            )}
            {
                isSmallScreen &&
                <Drawer
                    title="Menu"
                    placement="left"
                    onClose={onClose}
                    visible={drawerVisible}
                    className="drawer"
                    width={250}
                >
                    <Menu onSelect={handleMenuSelect} mode="vertical" defaultSelectedKeys={['1']} style={{ height: '100%' }}>
                        <Menu.Item key="1" icon={<ProfileOutlined />}>
                            Dashboard
                        </Menu.Item>
                        <Menu.Item key="2" icon={<AppstoreOutlined />}>
                            Jobs
                            </Menu.Item>
                            <Menu.Item key="15" icon={<ClusterOutlined />}>
                       Companies
                    </Menu.Item>
                        <Menu.Item key="3" icon={<SearchOutlined />}>
                           Applicants
                        </Menu.Item>
                        <Menu.Item key="4" icon={<FileSearchOutlined />}>
                            Invoices
                            </Menu.Item>
                            <Menu.Item key="5" icon={<SettingFilled />}>
                        Settings
                    </Menu.Item>
                        {/* <SubMenu key="sub1" icon={<BankOutlined />} title="Employer Branding">
                            <Menu.Item key="5">Recruitment Packages</Menu.Item>
                            <Menu.Item key="6">Analytics and Reports</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="7" icon={<PlusSquareOutlined />}>
                            Post a job
                        </Menu.Item>
                        <Menu.Item key="8" icon={<DollarOutlined />}>
                            Billing and Payments
                        </Menu.Item>
                        <SubMenu key="sub2" icon={<SolutionOutlined />} title="Applicant Tracking System (ATS)">
                            <Menu.Item key="9">Recruitment Events</Menu.Item>
                            <Menu.Item key="10">Employee Onboarding Solutions</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<ToolOutlined />} title="HR Resources">
                            <Menu.Item key="11">Support and Training</Menu.Item>
                            <Menu.Item key="12">Partnership Opportunities</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="13" icon={<AppstoreAddOutlined />}>
                            Customized Solutions
                        </Menu.Item>
                        <Menu.Item key="14" icon={<ClusterOutlined />}>
                            Enterprise Solutions
                            </Menu.Item> */}
                           
                    </Menu>
                </Drawer>
            }

            <Layout>
                <Content style={{ margin: '16px' }}>
                    {selectedMenuItem === '1' ?
                        <>
                            <CompanyDashboard />
                        </>
                        : selectedMenuItem === '2' ?
                            <>
                                <ManageJobListings />
                            </>
                            : selectedMenuItem === '3' ?
                                <>
                                    <SearchCandidates />
                                </>
                                : selectedMenuItem === '4' ?
                                    <>
                                        <ResumeDatabase />
                                    </>
                                    : selectedMenuItem === '5' ?
                                        <>
                                            <RecruitmentPackages />
                                        </>
                                        : selectedMenuItem === '6' ?
                                            <>
                                                <AnalyticsAndReports />
                                            </>
                                            : selectedMenuItem === '7' ?
                                                <>
                                                    <PostJobForm />
                                                </>
                                                : selectedMenuItem === '8' ?
                                                    <>
                                                        <BillingAndPayments />
                                                    </>
                                                    : selectedMenuItem === '9' ?
                                                        <>
                                                            <RecruitmentEvent />
                                                        </>
                                                        : selectedMenuItem === '10' ?
                                                            <>
                                                                <EmployeeOnboarding />
                                                            </>
                                                            : selectedMenuItem === '11' ?
                                                                <>
                                                                    <SupportAndTraining />
                                                                </>
                                                                : selectedMenuItem === '12' ?
                                                                    <>
                                                                        <PartnershipOpportunities />
                                                                    </>
                                                                    : selectedMenuItem === '13' ?
                                                                        <>
                                                                            <CustomizedSolutions />
                                                                        </>
                                                                        : selectedMenuItem === '14' ?
                                                                        <>
                                                                        <EnterpriseSolutions />
                                                                    </>
                                                                            : selectedMenuItem === '15' ?
                                                                            <>
                                                                            <CompaniesListed/>
                                                                                </> :
                                                                                <h1 className="flex justify-center items-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-orange-400 to-blue-500 mt-10 animate-bounce shadow-lg">
  This is settings, man. What do you expect?
</h1>

                                                                       

                    }
                </Content>
            </Layout>
            </Layout>
            
    );
};

export default page;
