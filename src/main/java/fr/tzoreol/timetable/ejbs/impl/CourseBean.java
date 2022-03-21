package fr.tzoreol.timetable.ejbs.impl;

import fr.tzoreol.timetable.dtos.CourseDto;
import fr.tzoreol.timetable.ejbs.Course;
import fr.tzoreol.timetable.entities.CourseEntity;
import fr.tzoreol.timetable.enums.Room;
import fr.tzoreol.timetable.listeners.ApplicationListener;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Stateless
public class CourseBean implements Course {
    @Override
    public List<CourseDto> getCourses() {
        EntityManagerFactory emf = ApplicationListener.getEmf();
        EntityManager em = emf.createEntityManager();

        Query query = em.createNamedQuery("findAllCourses", CourseEntity.class);
        List<CourseEntity> courses = query.getResultList();

        List<CourseDto> toReturn = new ArrayList<>();
        courses.forEach(course -> toReturn.add(new CourseDto(course)));

        return toReturn;
    }

    @Override
    public void saveCourse(CourseDto courseDto) {
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy hh:mm");
        CourseEntity course = new CourseEntity();

        try {
            Date date = formatter.parse(courseDto.getStartDateTime());
            System.out.println(date + ": " + courseDto.getStartDateTime());
            course.setStartDateTime(formatter.parse(courseDto.getStartDateTime()));
        } catch (ParseException e) {
            e.printStackTrace();
        }

        course.setDuration(courseDto.getDuration());
        course.setRoom(Room.valueOf(courseDto.getRoom()));
        course.setName(courseDto.getCourseName());

        EntityManagerFactory emf = ApplicationListener.getEmf();
        EntityManager em = emf.createEntityManager();

        em.getTransaction().begin();
        em.persist(course);
        em.getTransaction().commit();
        em.close();
    }
}
