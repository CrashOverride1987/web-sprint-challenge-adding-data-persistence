
exports.up = async function(knex) {
    await knex.schema
    .table.increments('project_id').notNullable().unique()
    .table.string('project_name').notNullable()
    .table.string('project_description')
    .table.interger('project_completed' || 0)

    .table.increments('resource_id').notNullable().unique()
    .table.string('resource_name').notNullable().unique()
    .table.string('resource_description')
    .table.interger('resource_project_id').notNullable()
    .references('project_id')
    .inTable('projects')
    .onDelete('RESTRICT')
    .onUpdate('RESTRICT')

    .table.increments('task_id').notNullable().unique()
    .table.string('task_description').notNullable()
    .table.string('task_notes')
    .table.interger('task_completed' || 0)
    .table.interger('project_id').notNullable()
    .references('project_id')
    .inTable('projects')
    .onDelete('RESTRICT')
    .onUpdate('RESTRICT')
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('project_completed')
    .dropTableIfExists('project_description')
    .dropTableIfExists('project_name')
    .dropTableIfExists('project_id')

    .dropTableIfExists('resource_description')
    .dropTableIfExists('resource_name')
    .dropTableIfExists('resource_id')

    .dropTableIfExists('task_completed')
    .dropTableIfExists('task_notes')
    .dropTableIfExists('task_description')
    .dropTableIfExists('task_id')
    .dropTableIfExists('project_id')
    
    .dropTableIfExists('resource_project_id')
};
