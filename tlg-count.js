
document.addEventListener("DOMContentLoaded", function () {
  const root = document.documentElement;
  const elementsData = []; // Array to store elements and their attributes

  const parseValue = (value) => {
    return parseFloat(value.replace(',', '.').replace(/[^\d.-]/g, ''));
  };

  const addThousandSeparator = (value, separator, decimalSeparator) => {
    let [integerPart, decimalPart] = value.replace(decimalSeparator, '.').split('.');
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return decimalPart ? integerPart + decimalSeparator + decimalPart : integerPart;
  };

  const updateElementText = (elementData, numericValue) => {
    let formattedValue = numericValue.toFixed(elementData.decimals);
    if (!isNaN(elementData.countDigits)) {
      // Apply thousand separator before padding with zeros
      formattedValue = addThousandSeparator(formattedValue, elementData.thousandSeparator, elementData.decimalSeparator);
      const parts = formattedValue.split(elementData.decimalSeparator);
      let integerPartWithPadding = parts[0].replace(/,/g, ''); // Remove existing separators for accurate padding
      integerPartWithPadding = integerPartWithPadding.padStart(elementData.countDigits, '0');
      // Reapply thousand separator after padding
      parts[0] = addThousandSeparator(integerPartWithPadding, elementData.thousandSeparator, '.');
      formattedValue = parts.join(elementData.decimalSeparator);
    } else {
      // If countDigits is not specified, just apply thousand separator
      formattedValue = addThousandSeparator(formattedValue, elementData.thousandSeparator, elementData.decimalSeparator);
    }

    if (elementData.element.innerText !== formattedValue) {
      elementData.element.innerText = formattedValue;
    }
  };

  const initAndUpdateElements = () => {
    const elements = document.querySelectorAll('[tlg-count^="number-"]');
    elements.forEach((element, index) => {
      const decimalAttribute = element.getAttribute('tlg-count-decimals');
      const elementData = {
        element: element,
        index: element.getAttribute('tlg-count').split('-')[1],
        decimals: isNaN(parseInt(decimalAttribute)) ? 0 : parseInt(decimalAttribute),
        thousandSeparator: element.getAttribute('tlg-count-thousand-separator') || '',
        decimalSeparator: element.getAttribute('tlg-count-decimal-separator') || '.',
        countDigits: parseInt(element.getAttribute('tlg-count-digits')),
      };

      elementsData.push(elementData); // Store element and attributes for later use

      // Update numbers initially
      elementsData.forEach(elementData => {
        let rawValue = root.style.getPropertyValue(`--tlg--count-${elementData.index}`).trim() || getComputedStyle(root).getPropertyValue(`--tlg--count-${elementData.index}`).trim();
        if (rawValue) {
          const numericValue = parseValue(rawValue);
          updateElementText(elementData, numericValue);
        }
      });

    });
  };

  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
        elementsData.forEach(elementData => {
          let rawValue = root.style.getPropertyValue(`--tlg--count-${elementData.index}`).trim() || getComputedStyle(root).getPropertyValue(`--tlg--count-${elementData.index}`).trim();
          if (rawValue) {
            const numericValue = parseValue(rawValue);
            updateElementText(elementData, numericValue);
          }
        });
      }
    });
  });

  observer.observe(root, {
    attributes: true,
    attributeFilter: ['style']
  });

  initAndUpdateElements(); // Initial setup
});