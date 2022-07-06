import React from "react";
function Form()
{
    return(
        <>
            <form method="post" className="was-validated">
            <div className="mb-3 mt-3" style={{width:"400px"}}>
                <label for="email" class="form-label">Ma email enter boi:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter chicken man email" name="email" required/>
                <div className="valid-feedback">Correcto emailination</div>
                <div className="invalid-feedback">Please enter your fat Email</div>
            </div>
            <div class="mb-3" style={{width:"400px"}}>
                <label for="pwd" class="form-label">dat password boi pls</label>
                <input type="password" class="form-control" id="pwd" placeholder="Enter fat chicken password" name="pwd" required/>
                <div className="valid-feedback">Correcto paswordination</div>
                <div className="invalid-feedback">Please enter your fat password</div>
            </div>
            <div class="form-check mb-3" style={{width:"400px"}}>
                <label for="remember" class="form-check-label">
                <input class="form-check-input" type="checkbox" name="remember" required/> Do you agree to our fat bum conditions
                <div className="valid-feedback">Thank you for agreeing our terms and conditions</div>
                <div className="invalid-feedback">Hey, You dont agree our terms and conditions? Agree it otherwise we will kick you out </div>
                </label>
            </div>
            <button type="submit" class="btn btn-info btn-lg">Submit</button>
            </form>
        </>
    );
}
export default Form;
