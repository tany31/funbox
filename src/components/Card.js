import React from 'react';
import funbox_logo from '../img/funbox_logo.png';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes  = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    consist: PropTypes.array,
    description: PropTypes.string,
    weight: PropTypes.number,
    isDisabled: PropTypes.bool
}
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isSelected: false, isSelectedHover: false, isDisabled: false};
    }
    componentWillMount() {
        if(this.props.card.isDisabled)
            this.setState({isDisabled: true});
    }
    render() {
        const {card} = this.props;
        
        var cardClass = classNames('card', {
            'card__selected': this.state.isSelected,
            'card__disabled': this.state.isDisabled,
            'card__selected__hover': this.state.isSelectedHover
        });
        
        return (
            <div className={cardClass}>
                <div 
                    className="card__wrapper" 
                    onClick={ handleOnClick.bind(this) } 
                    onMouseOver={handleOnMouseOver.bind(this)} 
                    onMouseOut={handleOnMouseOut.bind(this)}>
                    <div className="card__content">
                        <div className="card__subtitle">{this.state.isSelectedHover ? 'Котэ не одобряет?': 'Сказочное заморское яство'}</div>
                        <div className="card__title">
                            <h2>Нямушка</h2>
                            <span>{card.subtitle}</span>
                        </div>
                        <div className="card__consist">
                            {card.consist.map((item, index) => <div><span key={index} >{item}</span><br/></div> )}
                        </div>
                    </div>
                    <img src= {funbox_logo} alt=""/>
                    <div className="circle">
                        <span>{card.weight}</span>
                        <span>кг</span>    
                    </div>
                    <svg  className="stroke" width="326px" height="486px">
                            <path stroke="rgb(22, 152, 217)" strokeWidth="4px" fill="none" d="M310.000,482.000 L14.000,482.000 C7.373,482.000 2.000,476.627 2.000,470.000 L2.000,45.000 L45.000,2.000 L310.000,2.000 C316.627,2.000 322.000,7.372 322.000,14.000 L322.000,470.000 C322.000,476.627 316.627,482.000 310.000,482.000 Z"/>
                    </svg>
                    <svg width="326px" height="486px">
                            <path strokeWidth="4px" fill="rgb(242, 242, 242)" d="M310.000,482.000 L14.000,482.000 C7.373,482.000 2.000,476.627 2.000,470.000 L2.000,45.000 L45.000,2.000 L310.000,2.000 C316.627,2.000 322.000,7.372 322.000,14.000 L322.000,470.000 C322.000,476.627 316.627,482.000 310.000,482.000 Z"/>
                    </svg>
                  
                </div>
                <div className="card__footer">
                    {this.state.isSelected && (<p>{card.description}</p>)} 
                    {(!this.state.isDisabled && !this.state.isSelected)  && (<p>Чего сидишь? Порадуй котэ <a href="#" onClick={ handleOnClick.bind(this) }>купи.</a></p>) }
                    {this.state.isDisabled && (<p>Печалька, {card.subtitle} закончился</p>)} 
                </div>
            </div>
          );
          
    }

}
function handleOnClick() {
    if(!this.state.isDisabled) 
        if (!this.state.isSelected) {
            this.setState({isSelected: true});
        }   
        else {
            this.setState({isSelected: false});
            this.setState({isSelectedHover: false});
        }
}

function handleOnMouseOver() {
    if (this.state.isSelected) {
        this.setState({isSelectedHover: true});
    } else
        this.setState({isSelectedHover: false});
}

function handleOnMouseOut() {
    this.setState({isSelectedHover: false});
}
Card.propTypes = propTypes
export default Card;