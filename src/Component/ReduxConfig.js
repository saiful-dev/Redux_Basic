import {createStore} from 'redux'
function ReduxConfig(){
    //https://www.freecodecamp.org/news/redux-for-beginners/
    //createStore function accpts three arguments are-- reducer(required),value of state(optional), enhancer(optional)
    const reducer=(state=1,action)=>{
            if(action.type ==='INCREMENT'){
                return state +1;  //we didn't modify the original state
            }
            else if(action.type ==='DECREMENT'){
                return state -1; // we didn't modify the original state
            }
            
    };

    const store= createStore(reducer); //returns a store that we can use to manage the application data.

    store.subscribe(()=>{//callback function
        console.log('current state',store.getState());
        //we're calling the store.getState method to get the current value of the state.
    });
    //The only way to change the store is by dispatching actions.
    //An action is an object sent to the store like this:

    store.dispatch({
        type: 'INCREMENT'
      });
    //Here, we're calling the dispatch function available 
    //on the store to send an action with the type INCREMENT to the store.
    store.dispatch({
        type: 'INCREMENT'
    });
    //The dispatch function takes an object as a parameter which is known as an action.
    //The action must have a type property as shown above. If you don't pass the type property then you will get an error.
 
    store.dispatch({
        type: 'DECREMENT'
    });

    //Whenever we call the store.dispatch function, the reducer function will be called. 
    //Whatever is returned from the reducer will become the new value of the store.

    console.log("hello");
    return(

        <div>
            <h2>config file</h2>
        </div>
    );
}

export default ReduxConfig;