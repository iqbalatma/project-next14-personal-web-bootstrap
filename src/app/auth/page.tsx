import Auth from "@/app/auth/auth";

const Page = () => {
    return (
        <>
            <div id="auth">
                <div className="row h-100">
                    <div className="col-lg-5 col-12">
                        <Auth></Auth>
                    </div>
                    <div className="col-lg-7 d-none d-lg-block">
                        <div id="auth-right">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;