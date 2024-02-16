# TLG Count
Change numbers with native Webflow interactions.

## 🔗 Snippet

Copy the `<script>` below and paste it in the `<head>` or before `</body>` tag in your project on the pages where you need it. It also works with any newer version of three.js.

```html
<!-- Snippets by The Lazy God • Count -->
<script defer src="https://cdn.jsdelivr.net/gh/the-lazy-god/tlg-count@v1.0.0/tlg-count.min.js"></script>
``` 

## ✅ Required Setup

### 1: Add the attribute to text element(s)

Add the attribute below to any element or `<span>` which has the number you want to count up or down. The script will change the inner text of these elements to contain the numbers.

**Attribute:**

-   Name: `tlg-count`
-   Value: `number-1` (and number-2, number-3 and so on)

### 2: Create a variable for each number

Create a variable of type size for each unique number. This will be used in the interaction to change the update the displayed number.

**Variable (type = size):**

- Name: `tlg/count-1` (repeat `tlg/count-2`, `tlg/count-3` as needed)
- Value: `0px` (initialize this value to 0px)

### 3: Create native Webflow interactions

Create any Webflow interaction where you animate the variables you created above. The value of the variable going from 0 to 100 will correspond to video progress going from 0 to 100% completion.

## ⚡️ Optional add-ons

The following parameters can be customised with the additional 

- Number of decimals
- Decimal separator
- Thousand separator
- Minimum number of digits

### Number of decimals

Add this attribute to the `tlg-count` element to set a custom number of decimals to your numbers.

Default is 0 decimals.

**Attribute (Optional):**

-   Name: `tlg-count-decimals`
-   Value: `{number}` (Default = 0)

### Set decimal separator

Add this attribute to the `tlg-count` element to set a custom decimal separator.

Default is '.' as a decimal separator.

**Attribute (Optional):**

-   Name: `tlg-count-decimal-separator`
-   Value: `{character or space}` (Default = ".")

### Set thousand separator

Add this attribute to the `tlg-count` element to set a custom thousand separator.

By default there is no thousand separator.

**Attribute (Optional):**

-   Name: `tlg-count-thousand-separator`
-   Value: `{character or space}`

### Minimum number of digits

Add this attribute to the `tlg-count` element to set a the minimum number of digits. Applying this will add leading zeroes to a number e.g. with `tlg-count-digits`="3" the number "7" will show as "007".

Especially great with monospaced fonts.

**Attribute (Optional):**

-   Name: `tlg-count-digits`
-   Value: `{number}`



## 📦 Attributes overview

| Attribute                          | Description                                                                       | Values                              | Default          |
|------------------------------------|-----------------------------------------------------------------------------------|-------------------------------------|------------------|
| `tlg-count`                        | Identifies the text or span elements for the number. **Required**                 | number-{index}                      |                  |
| `tlg-count-decimals`               | Marks an image to be used in the kaleidoscope pattern.                            | {number}                            | 0                |
| `tlg-count-decimal-separator`      | Sets the animation mode of the kaleidoscope.                                      | {character or space}                | "."              |
| `tlg-count-thousand-separator`     | Adjusts the aspect ratio of the image texture.                                    | {character or space}                | None             |
| `tlg-count-digits`                 | Sets the scale factor of the kaleidoscope pattern.                                | {Number}                            | 1                |

## 📦 Variables overview

| Variable                           | Description    | Type          |
|------------------------------------|----------------|---------------|
| `tlg/count-{index}`                | CSS variable used for changing the numbers. Type must be size, but only the numerical value is used (i.e. the unit doesn't matter). In Webflow it needs to be defined like this tlg/count-1, tlg/count-2, tlg/count-3 and so on, which will create a folder called 'tlg'. **Required**                 | Size          |
