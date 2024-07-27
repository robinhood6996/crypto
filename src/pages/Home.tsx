import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {IoIosAddCircleOutline} from "react-icons/io";
import {PiHandWithdrawFill} from "react-icons/pi";
import {BiSupport} from "react-icons/bi";
import Btc from "../assets/images/btc.svg";
import Eth from "../assets/images/eth.svg";

function Home() {
    return (
        <div className={"container"}>
            <div className="row g-4 pt-4">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <Card className="custom-card cs-box-shadow text-center">
                        <Card.Body>
                            <div className="w-100 icon-wrapper">
                                <h5 className="fs-20px fw-600 mb-0">BTC/USDT</h5>
                            </div>
                            <div className={'fs-21px fw-600 mb-0 text--primary'}>65281.4903</div>
                            <p className={'fs-17px fw-500 text--primary mb-0'}>
                                65281.4903
                            </p>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <Card className="custom-card cs-box-shadow text-center">
                        <Card.Body>
                            <div className="w-100 icon-wrapper">
                                <h5 className="fs-20px fw-600 mb-0">BTC/USDT</h5>
                            </div>
                            <div className={'fs-21px fw-600 mb-0 text--primary'}>65281.4903</div>
                            <p className={'fs-17px fw-500 text--primary mb-0'}>
                                65281.4903
                            </p>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <Card className="custom-card cs-box-shadow text-center">
                        <Card.Body>
                            <div className="w-100 icon-wrapper">
                                <h5 className="fs-20px fw-600 mb-0">BTC/USDT</h5>
                            </div>
                            <div className={'fs-21px fw-600 mb-0 text--primary'}>65281.4903</div>
                            <p className={'fs-17px fw-500 text--primary mb-0'}>
                                65281.4903
                            </p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row g-0 mt-3">
                <div className="col-4">
                    <Link to={'/'}
                          className="btn btn-light btn-lg w-100 rounded-0 cs-box-shadow align-items-center d-flex justify-content-center icon-btn"><IoIosAddCircleOutline
                        className={"me-2"}/>Recharge</Link>
                </div>
                <div className="col-4">
                    <Link to={'/'}
                          className="btn btn-light btn-lg w-100 rounded-0 cs-box-shadow align-items-center d-flex justify-content-center icon-btn">
                        <PiHandWithdrawFill className={"me-2"} />
                        Withdraw</Link>
                </div>
                <div className="col-4">
                    <Link to={'/'}
                          className="btn btn-light btn-lg w-100 rounded-0 cs-box-shadow align-items-center d-flex justify-content-center icon-btn">
                        <BiSupport className={"me-2"}/>
                        Support</Link>
                </div>

            </div>

            <table className="table align-middle table-row-dashed fs-14px mt-5">
                <tbody className="fw-500 text-cs-gray">
                <tr>
                    <td>
                        <div className="d-flex align-items-center tb-coin-name">
                            <img style={{width: '30px'}} className={"me-2"} src={Btc} alt="Icon"/>
                            <h5 className="fs-14px mb-0">BTC</h5>
                        </div>
                    </td>
                    <td className="text-success max-w-150px">$630.00</td>
                    <td className="text-end max-w-150px">
                        <span className="badge bg-success px-3 py-2">$86.70</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center tb-coin-name">
                            <img style={{width: '30px'}} className={"me-2"} src={Eth} alt="Icon"/>
                            <h5 className="fs-14px mb-0">BTC</h5>
                        </div>
                    </td>
                    <td className="text-success max-w-150px">$630.00</td>
                    <td className="text-end max-w-150px">
                        <span className="badge bg-success px-3 py-2">$86.70</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center tb-coin-name">
                            <img style={{width: '30px'}} className={"me-2"} src={Btc} alt="Icon"/>
                            <h5 className="fs-14px mb-0">BTC</h5>
                        </div>
                    </td>
                    <td className="text-success max-w-150px">$630.00</td>
                    <td className="text-end max-w-150px">
                        <span className="badge bg-success px-3 py-2">$86.70</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center tb-coin-name">
                            <img style={{width: '30px'}} className={"me-2"} src={Eth} alt="Icon"/>
                            <h5 className="fs-14px mb-0">BTC</h5>
                        </div>
                    </td>
                    <td className="text-success max-w-150px">$630.00</td>
                    <td className="text-end max-w-150px">
                        <span className="badge bg-success px-3 py-2">$86.70</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center tb-coin-name">
                            <img style={{width: '30px'}} className={"me-2"} src={Btc} alt="Icon"/>
                            <h5 className="fs-14px mb-0">BTC</h5>
                        </div>
                    </td>
                    <td className="text-success max-w-150px">$630.00</td>
                    <td className="text-end max-w-150px">
                        <span className="badge bg-success px-3 py-2">$86.70</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center tb-coin-name">
                            <img style={{width: '30px'}} className={"me-2"} src={Eth} alt="Icon"/>
                            <h5 className="fs-14px mb-0">BTC</h5>
                        </div>
                    </td>
                    <td className="text-success max-w-150px">$630.00</td>
                    <td className="text-end max-w-150px">
                        <span className="badge bg-success px-3 py-2">$86.70</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center tb-coin-name">
                            <img style={{width: '30px'}} className={"me-2"} src={Btc} alt="Icon"/>
                            <h5 className="fs-14px mb-0">BTC</h5>
                        </div>
                    </td>
                    <td className="text-success max-w-150px">$630.00</td>
                    <td className="text-end max-w-150px">
                        <span className="badge bg-success px-3 py-2">$86.70</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center tb-coin-name">
                            <img style={{width: '30px'}} className={"me-2"} src={Eth} alt="Icon"/>
                            <h5 className="fs-14px mb-0">BTC</h5>
                        </div>
                    </td>
                    <td className="text-success max-w-150px">$630.00</td>
                    <td className="text-end max-w-150px">
                        <span className="badge bg-success px-3 py-2">$86.70</span>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    );
}

export default Home;