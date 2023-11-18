import AFirstChild from "./AFirstChild"
import ASecondChild from "./ASecondChild"

const AComponent = () => {
  return (
    <div>
        <h3 className="text-center">AChild</h3>
        <div className="row">
        <div className="col-md-6">
          <div className="card card-body">
            <AFirstChild/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card card-body">
            <ASecondChild/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default AComponent