import { useDispatch, useSelector } from "react-redux";
import { MODALS, open } from "../slice/modalSlice";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function IndexPage (){

    //#region
    //#endregion

    //#region SEO流程宣告
    useEffect(() => {
        //標題
        document.title = "首頁 | 基礎環境架構";

        //簡介
        let metaTag = document.querySelector("meta[name='description']");
        if (!metaTag) {
            metaTag = document.createElement("meta");
            metaTag.setAttribute("name", "description");
            document.head.appendChild(metaTag);
        }
        metaTag.setAttribute(
            "content",
            "基礎環境架構首頁頁面"
        );
    }, []);
    //#endregion

    //#region 讀取中央函式前置宣告
        //讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion

    //#region 讀取slice資料範例
        const active = useSelector((state)=>{
            return(
                state.modal.activeModal
            )
        })
        useEffect(()=>{
            console.log("Modal狀態:",active);
        },[active])
    //#endregion

    //#region 移動頁面前置宣告
    const navigate = useNavigate();
    //#endregion

    //#region 取得網址
    const location = useLocation();
    useEffect(()=>{
        console.log("取得的網址",location.pathname);
    },[location]);
    //#endregion

    //#region
    const inputData = [
        {
            id:1,
        }
    ]
    //#endregion



    return(
        <>
            {/* 段落 */}
            <section className="index">
                {/* 文章內容 */}
                <article className="indexContent">
                    <button type="button"
                            onClick={()=>{dispatch(open(MODALS.TESTMODAL));}}>
                        測試Modal按鈕
                    </button>
                    <button type="button"
                            onClick={()=>{navigate(`/Page/${inputData[0].id}`);}}>
                        連結範例
                    </button>
                </article>
                {/* 文章內容 */}
            </section>
            {/* 段落 */}
        </>
    )
}
export default IndexPage;