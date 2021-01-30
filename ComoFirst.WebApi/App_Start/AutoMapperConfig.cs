using Microsoft.Extensions.DependencyInjection;
using AutoMapper;

namespace ComoFirst.WebApi.App_Start
{
    public static class AutoMapperConfig
    {
        public static void Registers(IServiceCollection services)
        {
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new MappingProfile());
            });
            IMapper mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);
        }
    }

    public static class AutoMapperConfigExtensions
    {
        public static IServiceCollection AddAutoMapper(this IServiceCollection services)
        {
            AutoMapperConfig.Registers(services);
            return services;
        }
    }
}
