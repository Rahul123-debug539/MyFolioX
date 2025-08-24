import { Link } from "react-router-dom";
import portfolio from '../assets/portfolio.png';
import '../CSS/templatechooser.css'
import React from 'react'

function TemplateChooser() {
  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ];

  return (
    <div className='Container'>
      <h2>Template Chooser</h2>
      <div className="Template">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <div className="image">
              <img src={portfolio} alt={`Template ${item.id}`} />
            </div>
            <div className="info">
              <Link to={`/template${item.id}`}>
                <button>Choose Template {item.id}</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplateChooser;
