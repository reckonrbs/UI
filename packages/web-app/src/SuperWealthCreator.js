import React from 'react'

import './SuperWealthCreator.css'
import { useDispatch, useSelector } from 'react-redux'
import {
    getAccountList,
} from '@openbanking/ui-data/lib/services/account-service'
import InfoDisplay from '@openbanking/ui-common/lib/InfoDisplay'

const SuperWealthCreator = () => {
    const data = useSelector((state) => state.app.data)
    const accountId = useSelector((state) => state.account.accountId)

    const dispatch = useDispatch()
    return (
        <div className="Content-wrapper">
            <div className="content_header">
                <h2>Super Wealth Creator</h2>
            </div>
            <div className="content_body">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <button
                                    className="button_links"
                                    onClick={() => getAccountList(dispatch)}
                                >
                                    Get Account List
                    </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="recommendation">
                    <tbody>
                        <tr>
                            <td className="tdkey">
                                <img className="img"
                                    src="https://image.freepik.com/free-vector/people-health-logo-vector_23987-264.jpg" alt="Health" /></td>
                            <td className="tdvalue">Health Recommendations</td>
                        </tr>
                        <tr>
                            <td className="tdkey">
                                <img className="img"
                                    src="https://banner2.cleanpng.com/20180928/tea/kisspng-payday-loan-ec-finance-personal-cash-loans-perso-ec-loans-loans-for-south-africa-with-fast-online-5bada75894f114.4493889515381072246101.jpg" alt="Loan" /></td>
                            <td className="tdvalue">Loan Recommendation</td>
                        </tr>
                        <tr>
                            <td className="tdkey">
                                <img className="img"
                                    src="https://i7.pngguru.com/preview/196/115/669/euro-truck-simulator-2-bank-loan-finance-banks-pattern.jpg" alt="Bank" /></td>
                            <td className="tdvalue">Bank Recommendations</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="displayInfo">
                <InfoDisplay data={data} />
            </div>
        </div>

    )
}

export default SuperWealthCreator;