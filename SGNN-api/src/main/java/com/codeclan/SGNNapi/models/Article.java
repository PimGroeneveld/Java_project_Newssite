package com.codeclan.SGNNapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "articles")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column
    private int viewCount;

    @Column
    private String headline;

    @Column(columnDefinition = "TEXT")
    private String summary;

    @Column(name = "full_story", columnDefinition = "TEXT")
    private String fullStory;

    @Column(name = "publish_date")
    private LocalDateTime publishDate;

    @Column(name = "image_url")
    private String imageUrl;

    @JsonIgnoreProperties("articles")
    @ManyToOne
    @JoinColumn(name = "region_id", nullable = false)
    private Region region;

    @JsonIgnoreProperties("articles")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "journalists_articles",
            joinColumns = {
                    @JoinColumn(name = "article_id", nullable = false, updatable = false)
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "journalist_id", nullable = false, updatable = false)
            })
    private List<Journalist> journalists;

    @JsonIgnoreProperties("articles")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "categories_articles",
            joinColumns = {
                    @JoinColumn(name = "article_id", nullable = false, updatable = false)
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "category_id", nullable = false, updatable = false)
            })
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
        this.viewCount = 0;
    }

    public Long getId() {
        return Id;
    }

    public int getViewCount() {
        return viewCount;
    }

    public void setViewCount(int viewCount) {
        this.viewCount = viewCount;
    }

    public void setId(Long id) {
        this.Id = id;
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

    public void addJournalist(Journalist journalist){
        this.journalists.add(journalist);
    }

    public void addCategory(Category category){
        this.categories.add(category);
    }
}
