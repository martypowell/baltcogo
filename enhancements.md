The following resources were utilized for some of the ideas listed
* https://www.nngroup.com/articles/wizards/ 
* https://www.ventureharbour.com/form-design-best-practices/ 


## UX

1.	Potential autocomplete
1.	See #4 below
1.	Remove all non-essential fields (optional fields)
    1.	I would recommend we add some facility to allow those users to add those fields
1.	Limit the size of the color field?
1.	Use radio buttons (or image buttons) when options are limited
1.	For mobile users, what if the form was more Radio Button based?
1.	Ensure required fields are clearly marked unless option fields are removed
1.	People are increasingly less happy handing out their phone numbers. In fact, one study by Clicktale found that marking the phone number field as optional decreased the form abandonment rate from 39% to 4%. ME: we should maybe give htem a reason of why we need phone number maybe with a question mark or why do we need this type convetion

## Technical

1.	Move each panel into its own template file each having a uniquely named form as the root element
1.	Include each panel template in the current form
1.	Change validation from dom based approach to angular form validation
1.	Add a next button for each form, that has a descriptive title for the next step (see)
1.	Move static data to constant file
1.	Move conditional fields to a service 
1.	Move category logic to a service
1.	Move autocomplete functionality to a service (maybe even directive?)
1.	Remove all dom logic and replace with angular
1.	Move map logic settings to constant
1.	Move other map logic to a service
