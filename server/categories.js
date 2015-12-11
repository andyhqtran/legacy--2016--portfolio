if (Categories.find().count() === 0) {
  Categories.insert({
    id: '0',
    name: 'Template',
  });

  Categories.insert({
    id: '1',
    name: 'Design',
  });
}