import React from 'react';
import './Business.css';

class Business extends React.Component {
  render() {
    return (
      <div className='Business'>
        <div className='image-container'>
          <a href={this.props.business.imageSrc}>
            <img src={this.props.business.imageSrc} alt='business.imageSrc' />
          </a>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className='Business-information'>
          <div className='Business-address'>
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <a
              href='https://www.google.com/maps/search/?api=1&parameters={this.props.business.name}+{this.props.business.address}+{this.props.business.zipCode}'
              target='_blank'
              rel='noopener noreferrer'
            >
              {this.props.business.zipCode}
            </a>
            <p>
              {' '}
              {`${
                this.props.business.state === 'XGL'
                  ? this.props.business.city
                  : this.props.business.state
              } ${this.props.business.zipCode}`}
            </p>
          </div>
          <div className='Business-reviews'>
            <h3>{this.props.business.category.toUpperCase()}</h3>
            <h3 className='rating'>{`${this.props.business.rating} stars`}</h3>
            <p>{`${this.props.business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Business;
