---
layout: page
title: All Articles
permalink: /all-articles/
emoji: 📄
menu: articles
---

<ul markdown="0">
    {% for post in site.posts %}
        <li>
            <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%Y-%m-%d" }}</time>
            <a href="{{ post.url }}">{% if post.emoji %} {{ post.emoji }}{% endif %} {{ post.title }}</a></li>
    {% endfor %}
</ul>
