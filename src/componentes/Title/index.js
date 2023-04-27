import "./title.css";

export default function Title({title}) {
    return (
        <div className="container">
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-5">{title}</h1>
    
            </div>
        </div>
    )
}