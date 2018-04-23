import React from 'react';

class Tab extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    _setActiveTab = () => {
        this.props.setActiveTab(this.props.index)
    }

    render() {
        return (
            <div className="">
                <button className="tab" onClick = {this._setActiveTab}>{this.props.tabData.name}</button>
                {this.props.tabData.isActive ? 
                    <div className="tabContent">
                        Hello again
                    </div>
                : null}
            </div>
        )
    }
}

export default Tab;
