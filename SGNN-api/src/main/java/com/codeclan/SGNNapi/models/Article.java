package com.codeclan.SGNNapi.models;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class Article {

    private Long id;
    private String headline;
    private String summary;
    private String fullStory;
    private LocalDateTime publishDate;
    private String imageUrl;
    private Region region;

    private List<Journalist> journalists;
    private List<Category> categories;

    public Article() {
    }

    public Article(String headline, String summary, String fullStory, LocalDateTime publishDate, String imageUrl, Region region) {
        this.headline = headline;
        this.summary = summary;
        this.fullStory = fullStory;
        this.publishDate = publishDate;
        this.imageUrl = imageUrl;
        this.region = region;
        this.journalists = new ArrayList<>();
        this.categories = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHeadline() {
        return headline;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getFullStory() {
        return fullStory;
    }

    public void setFullStory(String fullStory) {
        this.fullStory = fullStory;
    }

    public LocalDateTime getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(LocalDateTime publishDate) {
        this.publishDate = publishDate;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Region getRegion() {
        return region;
    }

    public void setRegion(Region region) {
        this.region = region;
    }

    public List<Journalist> getJournalists() {
        return journalists;
    }

    public void setJournalists(List<Journalist> journalists) {
        this.journalists = journalists;
    }

    public List<Category> getCategories() {
        return categories;
    }

    public void setCategories(List<Category> categories) {
        this.categories = categories;
    }
}
