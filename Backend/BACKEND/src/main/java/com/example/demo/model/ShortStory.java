package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
public class ShortStory

{
    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long shortstoryid;
    private String shortstorytitle;
    @Lob
    @Column(columnDefinition = "MEDIUMTEXT")
    private String shortstorycontent;
    private String shortstoryphoto;
    public  ShortStory()
    {

    }

    public Long getShortstoryid() {
        return shortstoryid;
    }

    public void setShortstoryid(Long shortstoryid) {
        this.shortstoryid = shortstoryid;
    }

    public String getShortstorytitle() {
        return shortstorytitle;
    }

    public void setShortstorytitle(String shortstorytitle) {
        this.shortstorytitle = shortstorytitle;
    }

    public String getShortstorycontent() {
        return shortstorycontent;
    }

    public void setShortstorycontent(String shortstorycontent) {
        this.shortstorycontent = shortstorycontent;
    }

    public String getShortstoryphoto() {
        return shortstoryphoto;
    }

    public void setShortstoryphoto(String shortstoryphoto) {
        this.shortstoryphoto = shortstoryphoto;
    }

    public ShortStory(Long shortstoryid, String shortstorytitle, String shortstorycontent, String shortstoryphoto) {
        this.shortstoryid = shortstoryid;
        this.shortstorytitle = shortstorytitle;
        this.shortstorycontent = shortstorycontent;
        this.shortstoryphoto = shortstoryphoto;
    }
}