package fr.tzoreol.timetable.validators;

import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@FacesValidator("DateTimeValidator")
public class DateTimeValidator implements Validator {

    @Override
    public void validate(FacesContext facesContext, UIComponent uiComponent, Object o) throws ValidatorException {
        //Cast Object to String to handle our value
        String value = (String) o;

        //Pattern we want for the date
        SimpleDateFormat targetFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm");

        try {
            Date valueAsDate = targetFormat.parse(value);
            Date now = new Date();

            if(now.after(valueAsDate)) {
                throw new ValidatorException(new FacesMessage("La date et heure doit être supérieur à maintenant"));
            }
        } catch (ParseException e) {
            throw new ValidatorException(new FacesMessage("La valeur n'est pas du format attendu"));
        }
    }
}
