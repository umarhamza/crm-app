import React from 'react'

const FormElements = (props) => {
    const state = props.state

    const form = state.qa.map((field, index) => {
        const id = field.id
        const type = field.type
        const slug = field.slug
        const isCheckbox = type === 'checkbox'
        const value = field.answer
        const labelIsActive = value ? 'active' : ''
        const handleChange = (isCheckbox) ? this.handleChecked : this.handleChange 
        const showNext = id === "9" || id === "12" || id === "21" || id === "28" || id === "33" || id === "37"
        const end = id === "41"
  
        switch (type) {
          case 'checkbox':
            return (
              <div key={id}>
              <label>
                <input
                  id={slug}
                  className="filled-in"
                  type={type}
                  value={value}
                  checked={field.answer !== "No"}
                  onChange={handleChange(index)}
                />
                <span>{field.question}</span>
              </label>
            </div>
            );
          case 'radio':
            const label = field.options.map((option, i) => {
              return (
                <label key={i} className={`pos-r ${i !== 0 ? 'ml-30' : ''}`}>
                  <input
                    className="with-gap"
                    name={slug}
                    type={type}
                    value={option}
                    checked={field.answer === option}
                    onChange={handleChange(index)}
                  />
                  <span>{option}</span>
                </label>
              );
            });
            return (
              <div key={id}>
                <p>{field.question}</p>
                {label}
              </div>
            );
          case 'textarea':
            return (
              <div key={id} className="input-field">
                <label className={labelIsActive} htmlFor={slug}>{field.question}</label>
                <textarea
                  value={value}
                  id={slug}
                  className="materialize-textarea"
                  onChange={handleChange(index)}
                />
              </div>
            );
          default:
            return (
              <div key={id} className="input-field">
                  <label className={labelIsActive} htmlFor={slug}>{field.question}</label>
                  <input
                      value={value}
                      type={type}
                      id={slug}
                      onChange={handleChange(index)}
                    />
              </div>
            );
        }
      })

      return form

}

export default FormElements