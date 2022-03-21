package fr.tzoreol.timetable.entities;

import fr.tzoreol.timetable.enums.Room;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@NamedQueries({
        @NamedQuery(name = "findAllCourses", query = "SELECT c FROM CourseEntity c")
})
public class CourseEntity {
    @GeneratedValue
    @Id
    private Long id;

    @Temporal(TemporalType.TIMESTAMP)
    @NotNull
    private Date startDateTime;

    @NotNull
    private int duration;

    @Enumerated(EnumType.STRING)
    private Room room;

    @NotNull
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getStartDateTime() {
        return startDateTime;
    }

    public void setStartDateTime(Date startDateTime) {
        this.startDateTime = startDateTime;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }
}
