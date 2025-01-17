package com.example.demo.model;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "storyid")
public class StoryModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long storyid;

	private String storytitle;
	@Lob
	@Column(columnDefinition = "MEDIUMTEXT")
	private String content;
	private String author;
	private String genre;
	private String storyphoto;
	private int likeCount;
	private int dislikeCount;
	private double averageRating;

	@ManyToOne
	@JoinColumn(name = "author_id")
	private User user;

	@JsonIgnore
	@OneToMany(mappedBy = "storymodel", cascade = CascadeType.ALL)
	private List<Favourite> favourites;

	public List<Favourite> getFavourites() {
		return favourites;
	}

	public void setFavourites(List<Favourite> favourites) {
		this.favourites = favourites;
	}

	public StoryModel(Long storyid, String storytitle, String content, String author, String genre, String storyphoto, int likeCount, int dislikeCount, double averageRating) {
		this.storyid = storyid;
		this.storytitle = storytitle;
		this.content = content;
		this.author = author;
		this.genre = genre;
		this.storyphoto = storyphoto;
		this.likeCount = likeCount;
		this.dislikeCount = dislikeCount;
		this.averageRating = averageRating;
	}

	public Long getStoryid() {
		return storyid;
	}

	public void setStoryid(Long storyid) {
		this.storyid = storyid;
	}

	public String getStorytitle() {
		return storytitle;
	}

	public void setStorytitle(String storytitle) {
		this.storytitle = storytitle;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getStoryphoto() {
		return storyphoto;
	}

	public void setStoryphoto(String storyphoto) {
		this.storyphoto = storyphoto;
	}

	public int getLikeCount() {
		return likeCount;
	}

	public void setLikeCount(int likeCount) {
		this.likeCount = likeCount;
	}

	public int getDislikeCount() {
		return dislikeCount;
	}

	public void setDislikeCount(int dislikeCount) {
		this.dislikeCount = dislikeCount;
	}

	public double getAverageRating() {
		return averageRating;
	}

	public void setAverageRating(double averageRating) {
		this.averageRating = averageRating;
	}
	public StoryModel(){
		//default
	}

	public void addDislike() {
		this.dislikeCount++;
	}

	public void addLike(){
		this.likeCount++;
	}
	public void removeLike(){
		this.likeCount--;
	}
	public void removeDislike(){
		this.dislikeCount--;
	}
}
