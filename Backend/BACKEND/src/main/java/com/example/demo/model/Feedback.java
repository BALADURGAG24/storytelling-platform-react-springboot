package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.*;


@Entity
@Getter
@Setter
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long  fid;
    private String firstname;
    private String secondname;
    private Long phoneNo;
    private String EmailId;
    private String query;

    public Long getFid() {
        return fid;
    }
    public Feedback()
    {

    }
    public void setFid(Long fid) {
        this.fid = fid;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getSecondname() {
        return secondname;
    }

    public void setSecondname(String secondname) {
        this.secondname = secondname;
    }

    public Long getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(Long phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getEmailId() {
        return EmailId;
    }

    public void setEmailId(String emailId) {
        EmailId = emailId;
    }

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public Feedback(Long fid, String firstname, String secondname, Long phoneNo, String emailId, String query) {
        this.fid = fid;
        this.firstname = firstname;
        this.secondname = secondname;
        this.phoneNo = phoneNo;
        this.EmailId = emailId;
        this.query = query;
    }
}
