import { useDispatch, useSelector } from "react-redux";
import { MODALS, open } from "../slice/modalSlice";
import { useEffect } from "react";


function IndexPage (){

    //#region 讀取中央函式前置宣告
        //讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion

    //#region 讀取中央登入資料
        //讀取中央資料
        const active = useSelector((state)=>{
            return(
                state.modal.activeModal
            )
        })
        useEffect(()=>{
            console.log("Modal狀態:",active);
        },[active])
    //#endregion

    return(
        <>
            <div className="mt-100">Index</div>
            <button type="button"
                    onClick={()=>{dispatch(open(MODALS.TESTMODAL));}}>
                測試Modal按鈕
            </button>
        </>
    )
}
export default IndexPage;