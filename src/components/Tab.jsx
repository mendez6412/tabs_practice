import React from 'react';

class Tab extends React.Component {
    _setActiveTab = () => {
        this.props.setActiveTab(this.props.index)
    }

    render() {
        let tabData = this.props.tabData
        return (
            <div className="tab">
                <button className={tabData.isActive ? 'active' : ''} onClick={this._setActiveTab}>{tabData.name}</button>
                {tabData.isActive ? 
                    <div className="content">
                        <h2>{tabData.name}</h2>
                        <ul>
                            <li>Born: {tabData.birth_year}</li>
                            <li><a href={tabData.url}>More info</a></li>
                        </ul>
                    </div>
                : null}
            </div>
        )
    }
}

export default Tab;
