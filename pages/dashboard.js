
import { useEffect, useState } from 'react/cjs/react.development';

import {MainSideBar} from '../components/page/sidebar.js'
import {EarningsGraph, RevenueSourceGraph } from '../components/page/earningsGraph'
import { TopBar } from '../components/page/topbar'
import { Footer } from '../components/page/pageFooter'
import BoardItemHalfSmall from '../components/page/boardItemHaflSmall'
import DropdownTiny from '../components/page/dropdownTiny'
import DemoRow from '../components/page/demorow.js';
export default function MainDashboard(props) {
  const { state, setMainState } = props;
  const pstate = useState({
    sideBarComponentExpanded: false,
    sideBarUtilitiesExpanded: false,
  });
  //const [pageState, setPageState] = pstate;
  
  return (
    
    <div id="page-top">
      <div id="wrapper">
        <MainSideBar pstate={pstate}></MainSideBar>

        <div id="content-wrapper" className="d-flex flex-column">

          <div id="content">

            <TopBar pstate={pstate} state={state} />
            
            <div className="container-fluid">

              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                  className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
              </div>

              <div className="row">
                <BoardItemHalfSmall title="Earnings (Monthly)" value="$40,000" iconName="fa-calendar" />
                <BoardItemHalfSmall title="Earnings (Annual)" mainClsName='border-left-success'
                  textClsName ='text-success'
                  value="$215,000" iconName="fa-dollar-sign" />                

                <BoardItemHalfSmall title="Tasks" mainClsName='border-left-info'
                  textClsName='text-info'
                  value={
                    <>
                      <div className="row no-gutters align-items-center">
                        <div className="col-auto">
                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                        </div>
                        <div className="col">
                          <div className="progress progress-sm mr-2">
                            <div className="progress-bar bg-info" role="progressbar"
                              style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0"
                              aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>
                    </>
                  } iconName="fa-clipboard-list" />                

                <BoardItemHalfSmall title="Pending Requests" mainClsName='border-left-warning'
                  textClsName='text-warning'
                  value="18" iconName="fa-comments" />                 
              </div>

              <div className="row">
                <div className="col-xl-8 col-lg-7">
                  <div className="card shadow mb-4">
                    <div
                      className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                      <DropdownTiny>
                        <>
                        <div className="dropdown-header">Dropdown Header:</div>
                        <a className="dropdown-item" href="#">Load</a>                        
                        <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">Refresh</a>
                        </>
                      </DropdownTiny>
                    </div>
                    <div className="card-body">
                      <div className="chart-area">
                        <EarningsGraph/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-5">
                  <div className="card shadow mb-4">
                    <div
                      className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                      <div className="dropdown no-arrow">
                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                          aria-labelledby="dropdownMenuLink">
                          <div className="dropdown-header">Dropdown Header:</div>
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="chart-pie pt-4 pb-2">
                        <RevenueSourceGraph/>
                      </div>
                      <div className="mt-4 text-center small">
                        <span className="mr-2">
                          <i className="fas fa-circle text-primary"></i> Direct
                        </span>
                        <span className="mr-2">
                          <i className="fas fa-circle text-success"></i> Social
                        </span>
                        <span className="mr-2">
                          <i className="fas fa-circle text-info"></i> Referral
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <DemoRow></DemoRow>

            </div>

          </div>

          <Footer/>

        </div>

      </div>
                
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

                
      <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div className="modal-footer">
              <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
              <a className="btn btn-primary" href="login.html">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
