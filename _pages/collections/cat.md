---
layout: page
title: Cat Gallery
permalink: /collections/cat/
emoji: 🐈
menu: collections
images:
  - image_path: /assets/images/cat/1.jpg
    title: Cat 1
  - image_path: /assets/images/cat/2.jpg
    title: Cat 2
  - image_path: /assets/images/cat/3.jpg
    title: Cat 3
  - image_path: /assets/images/cat/4.jpg
    title: Cat 4
  - image_path: /assets/images/cat/5.jpg
    title: Cat 5
  - image_path: /assets/images/cat/6.jpg
    title: Cat 6
  - image_path: /assets/images/cat/7.jpg
    title: Cat 7
  - image_path: /assets/images/cat/8.jpg
    title: Cat 8
  - image_path: /assets/images/cat/9.jpg
    title: Cat 9
  - image_path: /assets/images/cat/10.jpg
    title: Cat 10
  - image_path: /assets/images/cat/11.jpg
    title: Cat 11
  - image_path: /assets/images/cat/12.jpg
    title: Cat 12
  - image_path: /assets/images/cat/13.jpg
    title: Cat 13
  - image_path: /assets/images/cat/14.jpg
    title: Cat 14
  - image_path: /assets/images/cat/15.jpg
    title: Cat 15
  - image_path: /assets/images/cat/16.jpg
    title: Cat 16
  - image_path: /assets/images/cat/17.jpg
    title: Cat 17
  - image_path: /assets/images/cat/18.jpg
    title: Cat 18
  - image_path: /assets/images/cat/19.jpg
    title: Cat 19
  - image_path: /assets/images/cat/20.jpg
    title: Cat 20
---

Simba is a very chonky, cute, sleepy cat. He's from the Ragdoll breed, they're called ragdolls because when you hold them they just lay down in whatever position you're holding them in, just like a ragdoll puppet.

---

<div class="gallery">
  {% for image in page.images %}
    <div class="gallery-wrapper"><img src="{{ image.image_path }}" alt="{{ image.title}}"/></div>
  {% endfor %}
</div>
