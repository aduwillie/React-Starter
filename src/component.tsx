import * as React from 'react';

interface IHelloWorldProps {
    name: string;
    people: string[];
}

export class HelloWorld extends React.Component<IHelloWorldProps, {}> {
    constructor(props: IHelloWorldProps) {
        super(props);
        this.alertUs = this.alertUs.bind(this);
    }

    alertUs(e: React.SyntheticEvent<any>) {
        alert('We are alerting you to come and pay your bill, Richard!');
    }

    render() {
        let mappedPeople = this.props.people.map((person, index) => {
            return <li key={index}>{person}</li>
        })
        return(
            <div>
                <p onClick={this.alertUs}>Hello {this.props.name} from Blinkas</p>
                <ul>
                    {mappedPeople}
                </ul>
            </div>
        )
    }
}
