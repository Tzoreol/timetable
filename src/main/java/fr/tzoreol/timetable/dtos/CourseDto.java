package fr.tzoreol.timetable.dtos;

import fr.tzoreol.timetable.ejbs.Course;
import fr.tzoreol.timetable.entities.CourseEntity;
import fr.tzoreol.timetable.enums.Room;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.faces.application.FacesMessage;
import javax.faces.validator.ValidatorException;
import javax.inject.Named;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Named("course")
@RequestScoped
public class CourseDto implements Serializable {

    @EJB
    private Course courseBean;

    private String startDateTime;

    @Min(value = 1, message = "La durée minimale est de 1 minute")
    @Max(value = 240, message = "La durée maximale est de 240 minutes")
    @Digits(integer = 3, fraction = 0,  message = "La durée doit être un entier")
    private int duration;

    private String room;
    private String courseName;

    public CourseDto() {}

    public CourseDto(CourseEntity course) {
        this.startDateTime = course.getStartDateTime().toString();
        this.duration = course.getDuration();
        this.room = course.getRoom().toString();
        this.courseName = course.getName();
    }

    public String getStartDateTime() {
        return startDateTime;
    }

    public void setStartDateTime(String startDateTime) {
        this.startDateTime = startDateTime;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public String getRoom() {
        return room;
    }

    public void setRoom(String room) {
        this.room = room;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String saveCourse() {
        this.courseBean.saveCourse(this);
        return "index";
    }

    public List<CourseDto> getCourses() {
        return this.courseBean.getCourses();
    }

    public List<Room> getRooms() {
        return Arrays.asList(Room.values());
    }
}
