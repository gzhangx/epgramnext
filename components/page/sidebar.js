import { PageNavTab } from './navTab';
export function MainSideBar(props) {
    const { pstate } = props;
    return <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-tractor"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Equipment Gram <sup>tm</sup></div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
            <a className="nav-link" href="#" onClick={e => e.preventDefault()}>
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">
            Interface
        </div>

        <PageNavTab name="Components"
            pstate={pstate}
            header={
                <>
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </>
            }
            body={
                <>
                    <h6 className="collapse-header">Custom Components:</h6>
                    <a className="collapse-item" href="buttons.html">Buttons</a>
                    <a className="collapse-item" href="cards.html">Cards</a>
                </>
            }
        ></PageNavTab>

        <PageNavTab name="Utilities"
            pstate={pstate}
            header={
                <>
                    <a>
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>Utilities</span>
                    </a>
                </>
            }
            body={
                <>
                    <h6 className="collapse-header">Custom Utilities:</h6>
                    <a className="collapse-item" href="utilities-color.html">Colors</a>
                    <a className="collapse-item" href="utilities-border.html">Borders</a>
                    <a className="collapse-item" href="utilities-animation.html">Animations</a>
                    <a className="collapse-item" href="utilities-other.html">Other</a>
                </>
            }
        ></PageNavTab>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">
            Addons
        </div>

        <PageNavTab name="Pages"
            pstate={pstate}
            header={
                <>
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </>
            }
            body={
                <>
                    <h6 className="collapse-header">Login Screens:</h6>
                    <a className="collapse-item" href="login.html">Login</a>
                    <a className="collapse-item" href="register.html">Register</a>
                    <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                    <div className="collapse-divider"></div>
                    <h6 className="collapse-header">Other Pages:</h6>
                    <a className="collapse-item" href="404.html">404 Page</a>
                    <a className="collapse-item" href="blank.html">Blank Page</a>
                </>
            }
        ></PageNavTab>
        
        <li className="nav-item">
            <a className="nav-link" href="#">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Charts</span></a>
        </li>

        <li className="nav-item">
            <a className="nav-link" href="#">
                <i className="fas fa-fw fa-table"></i>
                <span>Tables</span></a>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

        <div className="sidebar-card d-none d-lg-flex">
            <img className="sidebar-card-illustration mb-2" src="/img/undraw_rocket.svg" alt="..." layout='fixed' width={100} height={100} />
            <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
            <a className="btn btn-success btn-sm" href="#">Upgrade to Pro!</a>
        </div>

    </ul>
}