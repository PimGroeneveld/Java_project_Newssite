package com.codeclan.SGNNapi;

import com.codeclan.SGNNapi.models.*;
import com.codeclan.SGNNapi.repositories.articles.ArticleRepository;
import com.codeclan.SGNNapi.repositories.categories.CategoryRepository;
import com.codeclan.SGNNapi.repositories.journalists.JournalistRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SgnnApiApplicationTests {

	@Test
	public void contextLoads() {
	}

	@Autowired
	ArticleRepository articleRepository;

	@Autowired
	CategoryRepository categoryRepository;

	@Autowired
	JournalistRepository journalistRepository;


//	@Test
//	public void canOrderArticlesByDate() {
//		List<Article> sortedArticles = articleRepository.sortArticlesByDate();
//		assertEquals("Mad cow disease tests continue after Aberdeenshire discovery", sortedArticles.get(0).getHeadline());
//	}

	@Test
	public void canFindArticlesByCategory() {
		List<Article> articles = articleRepository.findArticlesByCategory(2L);
		assertEquals(2, articles.size());
	}

	@Test
	public void canFindArticlesByJournalist() {
		List<Article> articles = articleRepository.findArticlesByJournalist(2L);
		assertEquals(2, articles.size());
	}

	@Test
	public void canFindArticlesByRegion() {
		List<Article> articles = articleRepository.findArticlesByRegion(RegionName.SCOTLAND);
		assertEquals(2, articles.size());
	}

	@Test
	public void canFindArticlesByPartialHeadline() {
		List<Article> articles = articleRepository.findArticlesByHeadline("coW");
		assertEquals(1, articles.size());
	}
}
