import BFirstChild from "./BFirstChild"
import BSecondChild from "./BSecondChild"

const BComponent = () => {
  return (
    <div>
        <h3 className="text-center">BComponent</h3>
       <div className="row">
       <div className="col-md-6">
          <div className="card card-body">
            <BFirstChild/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card card-body">
            <BSecondChild/>
          </div>
        </div>
       </div>
    </div>
  )
}

export default BComponent