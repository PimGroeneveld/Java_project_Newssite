package com.codeclan.SGNNapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "journalists")
public class Journalist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column
    private String name;

    @Column(name= "city_of_residence")
    private String cityOfResidence;

    @Column
    private String email;

    @Column
    private String phone;

    @JsonIgnoreProperties("journalists")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "journalists_articles",
            joinColumns = {
                    @JoinColumn(name = "journalist_id", nullable = false, updatable = false)
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "article_id", nullable = false, updatable = false)
            })
    private List<Article> articles;

    public Journalist() {
    }

    public Journalist(String name, String cityOfResidence, String email, String phone) {
        this.name = name;
        this.cityOfResidence = cityOfResidence;
        this.email = email;
        this.phone = phone;
        this.articles = new ArrayList<>();
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        this.Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Article> getArticles() {
        return articles;
    }

    public void setArticles(List<Article> articles) {
        this.articles = articles;
    }

    public void addArticle(Article article){
        this.articles.add(article);
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCityOfResidence() {
        return cityOfResidence;
    }

    public void setCityOfResidence(String cityOfResidence) {
        this.cityOfResidence = cityOfResidence;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
