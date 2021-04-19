import ShareableCollapse from '@/components/reusable-components/collapse/ShareableCollapse';
import ShareableInput from '@/components/reusable-components/input/ShareableInput';
import ShareableRadio from '@/components/reusable-components/radio/ShareableRadio';

const CountryPopup = () => {
  const radioCountryData = [
    {
      id: 1,
      country: 'Russia'
    },
    {
      id: 2,
      country: 'Japan'
    },
    {
      id: 3,
      country: 'France'
    },
    {
      id: 4,
      country: 'Italy'
    }
  ];

  const radioCityData = [
    {
      id: 1,
      country: 'Moscow'
    },
    {
      id: 2,
      country: 'Tokio'
    },
    {
      id: 3,
      country: 'Paris'
    },
    {
      id: 4,
      country: 'Rome'
    }
  ];

  return (
    <div className="countryPopup__container">
      <ShareableCollapse
        header="Select a country/region"
        className="countryPopup__container__country"
      >
        {radioCountryData.map((country) => {
          return (
            <ShareableRadio
              key={country.id}
              id={country.id}
              country={country.country}
            />
          );
        })}
      </ShareableCollapse>
      <ShareableCollapse
        header="Select a city"
        className="countryPopup__container__city"
      >
        {radioCityData.map((country) => {
          return (
            <ShareableRadio
              key={country.id}
              id={country.id}
              country={country.country}
            />
          );
        })}
      </ShareableCollapse>
      <div className="countryPopup__container__inputs">
        <ShareableInput label="Postal code" />
        <ShareableInput label="Street" />
        <ShareableInput label="Building/house" />
        <ShareableInput label="Room" />
      </div>
    </div>
  );
};

export default CountryPopup;
