import React from "react";

export class ClassExample extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false,
            post: {}
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        console.log(this)
        console.log(event.target)
        this.setState(
            {
                show: true
            }
        )
    };

    handleDiv(e) {
        console.log(e.target);
        const button = document.getElementById("but");
        console.log(button);
    }

    async getNews() {
        let data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });
        this.setState({ post: data });

        console.log(this.state.post);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.show !== this.state.show) {
            this.getNews();
            // console.log(this.state.post);
        }
    }

    // componentWillUnmount() {
    //     document.getElementById("but").removeEventListener("click", this.handleClick);
    // }

    render() {
        //for checking
        for (const key in this.state.post) {
            const element = this.state.post[key];
            console.log(element);
        }

        if (!this.state.show) {
            return (
                <button id="but" onClick={this.handleClick}>Click</button>
            )
        }
        return (
            <>
                <div
                    onClick={this.handleDiv}
                    style={
                        {
                            width: 200,
                            height: 200,
                            backgroundColor: "white",
                        }}
                >
                    Simple Message
                    <h2>{this.state.post.id}</h2>
                    <p>{this.state.post.title}</p>
                </div>
                <button id="but" onClick={this.handleClick}>Click</button>
            </>
        )
    }

}