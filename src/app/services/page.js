'use client'
import React, { useState } from 'react'
import './services.css'

const ServiceSection = ({ category, cards = [], onCardClick }) => {
  const [showAll, setShowAll] = useState(false)
  const visibleCards = showAll ? cards : cards.slice(0, 3)

  return (
    <div className="service-section">
      <h2 className="category-title">{category}</h2>

      <div className="card-container">
        {visibleCards.map((card, index) => (
          <div className="card" key={index} onClick={() => onCardClick(card)}>
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {cards.length > 3 && (
        <button className="show-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  )
}

const ServiceModal = ({ card, onClose }) => {
  if (!card) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={card.image} alt={card.title} className="modal-image" />
        <h2 className="modal-title">{card.title}</h2>
        <p className="modal-description">{card.fullDescription}</p>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const [selectedCard, setSelectedCard] = useState(null)

  const services = [
    {
      category: "Building Construction",
      cards: [
        {
          image: "/img1.jpg",
          title: "Residential Buildings (ghar, flats)",
          description: "Residential Buildings related service.",
          fullDescription: "This is a detailed explanation about residential buildings (ghar, flats) services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img2.jpg",
          title: "Commercial Buildings (shops, offices)",
          description: "Commercial Buildings related service.",
          fullDescription: "This is a detailed explanation about commercial buildings (shops, offices) services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img3.jpg",
          title: "Industrial Construction",
          description: "Industrial Construction related service.",
          fullDescription: "This is a detailed explanation about industrial construction services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img3.jpg",
          title: "Industrial Construction",
          description: "Industrial Construction related service.",
          fullDescription: "This is a detailed explanation about industrial construction services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img3.jpg",
          title: "Industrial Construction",
          description: "Industrial Construction related service.",
          fullDescription: "This is a detailed explanation about industrial construction services. We offer top-notch quality and custom solutions tailored to your project requirements."
        }
      ]
    },
    {
      category: "Interior Designing",
      cards: [
        {
          image: "/img4.jpg",
          title: "Home Interior",
          description: "Home Interior related service.",
          fullDescription: "This is a detailed explanation about home interior services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img5.jpg",
          title: "Office Interior",
          description: "Office Interior related service.",
          fullDescription: "This is a detailed explanation about office interior services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img6.jpg",
          title: "Modular Kitchen",
          description: "Modular Kitchen related service.",
          fullDescription: "This is a detailed explanation about modular kitchen services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img4.jpg",
          title: "Home Interior",
          description: "Home Interior related service.",
          fullDescription: "This is a detailed explanation about home interior services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img5.jpg",
          title: "Office Interior",
          description: "Office Interior related service.",
          fullDescription: "This is a detailed explanation about office interior services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img6.jpg",
          title: "Modular Kitchen",
          description: "Modular Kitchen related service.",
          fullDescription: "This is a detailed explanation about modular kitchen services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img7.jpg",
          title: "False Ceiling",
          description: "False Ceiling related service.",
          fullDescription: "This is a detailed explanation about false ceiling services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img8.jpg",
          title: "Lighting & Décor Setup",
          description: "Lighting & Décor Setup related service.",
          fullDescription: "This is a detailed explanation about lighting and décor setup services. We offer top-notch quality and custom solutions tailored to your project requirements."
        }
      ]
    },
    {
      category: "Renovation & Remodeling",
      cards: [
        {
          image: "/img9.jpg",
          title: "Home Renovation",
          description: "Home Renovation related service.",
          fullDescription: "This is a detailed explanation about home renovation services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img12.jpg",
          title: "Bathroom/Kitchen Remodeling",
          description: "Bathroom/Kitchen Remodeling related service.",
          fullDescription: "This is a detailed explanation about bathroom/kitchen remodeling services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img9.jpg",
          title: "Home Renovation",
          description: "Home Renovation related service.",
          fullDescription: "This is a detailed explanation about home renovation services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img46.jpg",
          title: "Bathroom/Kitchen Remodeling",
          description: "Bathroom/Kitchen Remodeling related service.",
          fullDescription: "This is a detailed explanation about bathroom/kitchen remodeling services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img62.jpg",
          title: "Structural Repairs",
          description: "Structural Repairs related service.",
          fullDescription: "This is a detailed explanation about structural repairs services. We offer top-notch quality and custom solutions tailored to your project requirements."
        }
      ]
    },
    {
      category: "Architectural Design",
      cards: [
        {
          image: "/img12.jpg",
          title: "2D/3D Floor Plans",
          description: "2D/3D Floor Plans related service.",
          fullDescription: "This is a detailed explanation about 2D/3D floor plans services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img13.jpg",
          title: "Elevation Design",
          description: "Elevation Design related service.",
          fullDescription: "This is a detailed explanation about elevation design services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img14.jpg",
          title: "Site Planning",
          description: "Site Planning related service.",
          fullDescription: "This is a detailed explanation about site planning services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img12.jpg",
          title: "2D/3D Floor Plans",
          description: "2D/3D Floor Plans related service.",
          fullDescription: "This is a detailed explanation about 2D/3D floor plans services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img13.jpg",
          title: "Elevation Design",
          description: "Elevation Design related service.",
          fullDescription: "This is a detailed explanation about elevation design services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img14.jpg",
          title: "Site Planning",
          description: "Site Planning related service.",
          fullDescription: "This is a detailed explanation about site planning services. We offer top-notch quality and custom solutions tailored to your project requirements."
        }
      ]
    },
    {
      category: "Civil Engineering Services",
      cards: [
        {
          image: "/img14.jpg",
          title: "Site Supervision",
          description: "Site Supervision related service.",
          fullDescription: "This is a detailed explanation about site supervision services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img16.jpg",
          title: "Material Estimation",
          description: "Material Estimation related service.",
          fullDescription: "This is a detailed explanation about material estimation services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img61.jpg",
          title: "Structural Analysis",
          description: "Structural Analysis related service.",
          fullDescription: "This is a detailed explanation about structural analysis services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img68.jpg",
          title: "Site Supervision",
          description: "Site Supervision related service.",
          fullDescription: "This is a detailed explanation about site supervision services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img16.jpg",
          title: "Material Estimation",
          description: "Material Estimation related service.",
          fullDescription: "This is a detailed explanation about material estimation services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img17.jpg",
          title: "Structural Analysis",
          description: "Structural Analysis related service.",
          fullDescription: "This is a detailed explanation about structural analysis services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
      ]
    },
    {
      category: "Exterior Work",
      cards: [
        {
          image: "/img18.jpg",
          title: "Painting & Coating",
          description: "Painting & Coating related service.",
          fullDescription: "This is a detailed explanation about painting and coating services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img19.jpg",
          title: "Wall Cladding",
          description: "Wall Cladding related service.",
          fullDescription: "This is a detailed explanation about wall cladding services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img18.jpg",
          title: "Painting & Coating",
          description: "Painting & Coating related service.",
          fullDescription: "This is a detailed explanation about painting and coating services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img19.jpg",
          title: "Wall Cladding",
          description: "Wall Cladding related service.",
          fullDescription: "This is a detailed explanation about wall cladding services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img28.jpg",
          title: "Garden Landscaping",
          description: "Garden Landscaping related service.",
          fullDescription: "This is a detailed explanation about garden landscaping services. We offer top-notch quality and custom solutions tailored to your project requirements."
        }
      ]
    },
    {
      category: "Plumbing & Electrical",
      cards: [
        {
          image: "/img21.jpg",
          title: "Full House Wiring",
          description: "Full House Wiring related service.",
          fullDescription: "This is a detailed explanation about full house wiring services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img22.jpg",
          title: "Plumbing System Setup",
          description: "Plumbing System Setup related service.",
          fullDescription: "This is a detailed explanation about plumbing system setup services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img21.jpg",
          title: "Full House Wiring",
          description: "Full House Wiring related service.",
          fullDescription: "This is a detailed explanation about full house wiring services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img22.jpg",
          title: "Plumbing System Setup",
          description: "Plumbing System Setup related service.",
          fullDescription: "This is a detailed explanation about plumbing system setup services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img21.jpg",
          title: "Full House Wiring",
          description: "Full House Wiring related service.",
          fullDescription: "This is a detailed explanation about full house wiring services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img22.jpg",
          title: "Plumbing System Setup",
          description: "Plumbing System Setup related service.",
          fullDescription: "This is a detailed explanation about plumbing system setup services. We offer top-notch quality and custom solutions tailored to your project requirements."
        }

      ]
    },
    {
      category: "Maintenance & Repair",
      cards: [

        {
          image: "/img23.jpg",
          title: "Turnkey Projects",
          description: "Turnkey Projects related service.",
          fullDescription: "This is a detailed explanation about turnkey projects. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img24.jpg",
          title: "Cost Estimation & Budgeting",
          description: "Cost Estimation & Budgeting related service.",
          fullDescription: "This is a detailed explanation about cost estimation and budgeting services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img21.jpg",
          title: "Full House Wiring",
          description: "Full House Wiring related service.",
          fullDescription: "This is a detailed explanation about full house wiring services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img22.jpg",
          title: "Plumbing System Setup",
          description: "Plumbing System Setup related service.",
          fullDescription: "This is a detailed explanation about plumbing system setup services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
      ]
    },
    {
      category: "Project Management",
      cards: [
        {
          image: "/img23.jpg",
          title: "Turnkey Projects",
          description: "Turnkey Projects related service.",
          fullDescription: "This is a detailed explanation about turnkey projects. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img24.jpg",
          title: "Cost Estimation & Budgeting",
          description: "Cost Estimation & Budgeting related service.",
          fullDescription: "This is a detailed explanation about cost estimation and budgeting services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img23.jpg",
          title: "Turnkey Projects",
          description: "Turnkey Projects related service.",
          fullDescription: "This is a detailed explanation about turnkey projects. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img24.jpg",
          title: "Cost Estimation & Budgeting",
          description: "Cost Estimation & Budgeting related service.",
          fullDescription: "This is a detailed explanation about cost estimation and budgeting services. We offer top-notch quality and custom solutions tailored to your project requirements."
        },
        {
          image: "/img26.jpg",
          title: "Labor & Material Management",
          description: "Labor & Material Management related service.",
          fullDescription: "This is a detailed explanation about labor and material management services. We offer top-notch quality and custom solutions tailored to your project requirements."
        }
      ]
    }
  ];
  
  

  return (
    <main>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Our Services</h1>

      {services.map((service, index) => (
        <ServiceSection
          key={index}
          category={service.category}
          cards={service.cards}
          onCardClick={setSelectedCard}
        />
      ))}

      <ServiceModal card={selectedCard} onClose={() => setSelectedCard(null)} />
    </main>
  )
}
