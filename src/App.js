import React, {Component} from 'react';
import './App.css';

class App extends Component {
    
    showInforProduct(product){
        if(product.status){
            return <h2>
                        ID: {product.id} <br/>
                        Name: {product.name} <br/>
                        Pricer: {product.price} VND <br/>
                        Status: {product.status ? 'Active' : 'Pending'}                            
                    </h2>
        }
    }

    

    render() {
        // return React.createElement('span', {className : 'label label-danger', id :'1'}, 'Appcomponent');
        var a = 5;
        var name = 'hiep';
        var b = 7;
        var product = {
            id: 1,
            name: 'iphone 5',
            price: 15000000,
            status: true
        };

        var users= [
            {
                id: 1,
                name: 'Nguyen Van A',
                age: 20
            },
            {
                id: 2,
                name: 'Nguyen Van B',
                age: 21
            },
            {
                id: 3,
                name: 'Nguyen Van C',
                age: 22
            }
        ];

        var elements = users.map((user, index) => {
            return  <div key={ user.id }>
                        <h2>Ten: { user.name }</h2>
                        <p>Tuoi: { user.age }</p>
                    </div>
        });
        return(
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Title</a>
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="ml-30">
                    <h2>
                        a: { a } <br/>
                        b: { b } <br/>
                        a + b = {a + b}

                    </h2>
                    <h2>
                        name: { name }

                    </h2>
                    { this.showInforProduct(product) }
                    <br/>
                    <hr/>
                    { elements }
                </div>
            </div>
        );
    }
}

export default App;
