import React, {userState} from "react";

function Example() {
    // declare a new state variable, which we'll call count

    const  [count, setCount] = userState
    return (
        <div>
        <p>You click {count} times </p>
        <button onClick={() => setCount(count + 1)}>
        Click me</button>
        </div>
    );

}
export default Example;