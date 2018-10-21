package com.codeclan.SGNNapi.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "regions")
public class Region {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Enumerated(EnumType.STRING)
    @Column(name = "region_name")
    private RegionName regionName;


    @OneToMany(mappedBy = "region")
    private List<Article> articles;

    public Region() {
    }

    public Region(RegionName regionName) {
        this.regionName = regionName;
        this.articles = new ArrayList<>();
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        this.Id = id;
    }

    public RegionName getRegionName() {
        return regionName;
    }

    public void setRegionName(RegionName regionName) {
        this.regionName = regionName;
    }

    public List<Article> getArticles() {
        return articles;
    }

    public void setArticles(List<Article> articles) {
        this.articles = articles;
    }
}
