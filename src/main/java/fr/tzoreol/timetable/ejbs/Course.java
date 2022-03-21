package fr.tzoreol.timetable.ejbs;

import fr.tzoreol.timetable.dtos.CourseDto;

import javax.ejb.Local;
import java.util.List;

@Local
public interface Course {
    List<CourseDto> getCourses();
    void saveCourse(CourseDto courseDto);
}
