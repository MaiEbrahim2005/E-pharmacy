import React from 'react';
import './ServicesSection.css';
import { FiTruck , FiCreditCard , FiDollarSign , FiHeadphones} from "react-icons/fi";


const ServicesSection = () => {
const services = [
{
    icon: <FiTruck className="service-icon" />,
    title: "Free Shipping & Returns",
    description: "For all order over $200"
},
{
    icon: <FiCreditCard className="service-icon" />,
    title: "Secure Payment",
    description: "Ensure Secure Payment"
},
{
    icon: <FiDollarSign className="service-icon" />,
    title: "Money Back Guarantee",
    description: "Returning Money in 30 days"
},
{
    icon: <FiHeadphones className="service-icon" />,
    title: "24/7 Customer Support",
    description: "Friendly Customer Support"
}
];

return (
    <section className="services-section" aria-labelledby="services-heading" >
    <div className="services-container">
        {services.map((service, index) => (
        <article key={index} className="service-item" aria-roledescription="service">
            <div className="service-icon-wrapper">
            {service.icon}
            </div>
            <div className="service-text">
            <h4 id={`service-title-${index}`}>{service.title}</h4>
            <p>{service.description}</p>
            </div>
        </article>
        ))}
    </div>
    </section>
);
};

export default ServicesSection;
