package com.codeclan.SGNNapi.repositories.articles;

import com.codeclan.SGNNapi.models.Article;
import com.codeclan.SGNNapi.models.Region;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class ArticleRepositoryImpl implements ArticleRepositoryCustom{

    @Autowired
    EntityManager entityManager;

    @Override
    @Transactional
    public List<Article> sortArticlesByDate() {

        List<Article> articles = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria criteria = session.createCriteria(Article.class);
            criteria.addOrder(Order.desc("publishDate"));
            articles = criteria.list();
        }
        catch (HibernateException e) {
            e.printStackTrace();
        }
        finally {
            session.close();
        }

        return articles;
    }

    @Override
    @Transactional
    public List<Article> findArticlesByCategory(Long categoryId) {

        List<Article> articles = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria criteria = session.createCriteria(Article.class);
            criteria.createAlias("categories", "category");
            criteria.add(Restrictions.eq("category.id", categoryId));
            articles = criteria.list();
        }
        catch (HibernateException e) {
            e.printStackTrace();
        }
        finally {
            session.close();
        }

        return articles;
    }

    @Override
    @Transactional
    public List<Article> findArticlesByJournalist(Long journalistId) {

        List<Article> articles = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria criteria = session.createCriteria(Article.class);
            criteria.createAlias("journalists", "journalist");
            criteria.add(Restrictions.eq("journalist.id", journalistId));
            articles = criteria.list();
        }
        catch (HibernateException e) {
            e.printStackTrace();
        }
        finally {
            session.close();
        }

        return articles;
    }

    @Override
    @Transactional
    public List<Article> findArticlesByRegion(Region region) {

        List<Article> articles = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria criteria = session.createCriteria(Article.class);
            criteria.add(Restrictions.eq("region", region));
            articles = criteria.list();
        }
        catch (HibernateException e) {
            e.printStackTrace();
        }
        finally {
            session.close();
        }

        return articles;
    }

}
