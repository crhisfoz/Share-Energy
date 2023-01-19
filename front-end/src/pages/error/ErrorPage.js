import React from "react";
import { StyledError } from "./styledError";
import "./style.css"

export const ErrorPage = () => {

    return (
            <section className="page_404">
                <div className="container">
                    <div className="row"></div>
                    <div className="col-sm-12">
                        <div className="col-sm-10 col-sm-offset-1 text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center"> 404 </h1>
                                <div className="contant_box_404">
                                    <h3 className="h2"> Parece que você está perdido</h3>
                                    <p>a página que você está procurando não está disponível no momento, atualize-a ou aguarde alguns instantes e tente novamente</p>
                                    <a href="/home" className="link-404">Go to Home</a>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

    );
};
