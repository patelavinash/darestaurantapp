import React from "react";
function Form()
{
    return(
        <>
            <form method="post">
            <div className="mb-3 mt-3" style={{width:"400px"}}>
                <label for="email" class="form-label">Enter email chicken man:</label>
                <input type="email" class="form-control" id="email" placeholder="Boi Enter dat fat chicken deez nuts email:" name="email"/>
            </div>
            <div class="mb-3" style={{width:"400px"}}>
                <label for="pwd" class="form-label">Oi fatso enter ur password</label>
                <input type="password" class="form-control" id="pwd" placeholder="Enter fat password" name="pwd"/>
            </div>
            <div class="form-check mb-3" style={{width:"400px"}}>
                <label for="remember" class="form-check-label">
                <input class="form-check-input" type="checkbox" name="remember"/> Remember me or ur mom will die
                </label>
            </div>
            <button type="submit" class="btn btn-info btn-lg">Submit ur deez</button>
            </form>
        </>
    );
}
export default Form;